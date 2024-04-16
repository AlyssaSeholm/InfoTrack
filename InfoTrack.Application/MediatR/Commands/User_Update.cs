using AutoMapper;
using InfoTrack.Application.Common;
using InfoTrack.Application.DTOs;
using InfoTrack.Domain.Entities.Services.Interfaces;
using MediatR;

namespace InfoTrack.Application.MediatR.Commands
{
    public record UpdateUserRequest(int Id, string? Email, string? FirstName, string? LastName, string? SelectedTheme)
        : IRequest<UpdateUserResponse>;

    public record UpdateUserResponse(UserDto User);
    public class UpdateUserHandler(IUserService userService, IMapper mapper)
        : IRequestHandler<UpdateUserRequest, UpdateUserResponse>
    {
        private readonly IUserService _userService = userService;
        private readonly IMapper _mapper = mapper;

        public async Task<UpdateUserResponse> Handle(UpdateUserRequest request, CancellationToken cancellationToken)
        {
            var user = await _userService.GetUserById(request.Id, cancellationToken);

            if (user == null)
            {
                return new UpdateUserResponse(UserDto.CreateEmptyWithMessage(ResponseMessages.StatusType.NotFound));
            }

            if (!string.IsNullOrEmpty(request.Email)) { user.Email = request.Email; }
            if (!string.IsNullOrEmpty(request.FirstName)) { user.FirstName = request.FirstName; }
            if (!string.IsNullOrEmpty(request.LastName)) { user.LastName = request.LastName; }
            user.SelectedTheme = request.SelectedTheme;

            await _userService.UpdateUser(user, cancellationToken);

            return new UpdateUserResponse(_mapper.Map<UserDto>(user));
        }
    }

}
