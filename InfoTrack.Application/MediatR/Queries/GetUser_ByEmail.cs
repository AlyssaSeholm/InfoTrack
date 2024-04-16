using AutoMapper;
using InfoTrack.Application.Common;
using InfoTrack.Application.DTOs;
using InfoTrack.Domain.Entities.Services.Interfaces;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace InfoTrack.Application.MediatR.Queries
{
    public class GetUserByEmailRequest : IRequest<GetUserByEmailResponse>
    {
        [FromRoute]
        public required string Email { get; set; }
    }

    public record GetUserByEmailResponse(UserDto? User);

    public class GetUserByEmailHandler(IUserService userService, IMapper mapper) : IRequestHandler<GetUserByEmailRequest, GetUserByEmailResponse>
    {
        private readonly IUserService _userService = userService;
        private readonly IMapper _mapper = mapper;

        public async Task<GetUserByEmailResponse> Handle(GetUserByEmailRequest request, CancellationToken cancellationToken)
        {
            var user = await _userService.GetUserByEmail(request.Email, cancellationToken);

            if (user == null ||  user.Id == 0)
            {
                return new GetUserByEmailResponse(null); // UserDto.CreateEmptyWithMessage(ResponseMessages.StatusType.NotFound));
            }

            var response = new GetUserByEmailResponse(_mapper.Map<UserDto>(user));

            return response;
        }
    }
}
