using AutoMapper;
using InfoTrack.Application.Common;
using InfoTrack.Application.DTOs;
using InfoTrack.Domain.Services.Interfaces;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace InfoTrack.Application.MediatR.Queries
{
    public class GetUserByIdRequest : IRequest<GetUserByIdResponse>
    {
        [FromRoute]
        public required string Id { get; set; }
    }

    public record GetUserByIdResponse(UserDto User);

    public class GetUserByIdHandler(IUserService userService, IMapper mapper) : IRequestHandler<GetUserByIdRequest, GetUserByIdResponse>
    {
        private readonly IUserService _userService = userService;
        private readonly IMapper _mapper = mapper;

        public async Task<GetUserByIdResponse> Handle(GetUserByIdRequest request, CancellationToken cancellationToken)
        {
            if (!Int32.TryParse(request.Id, out int id))
            {
                return new GetUserByIdResponse(UserDto.CreateEmptyWithMessage(ResponseMessages.StatusType.Conversion_To_Int));
            }

            var user = await _userService.GetUserById(id, cancellationToken);

            if (user == null)
            {
                return new GetUserByIdResponse(UserDto.CreateEmptyWithMessage(ResponseMessages.StatusType.NotFound));
            }

            var response = new GetUserByIdResponse(_mapper.Map<UserDto>(user));

            return response;
        }
    }
}
