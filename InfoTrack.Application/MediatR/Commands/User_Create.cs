using AutoMapper;
using InfoTrack.Application.DTOs;
using InfoTrack.Domain.Entities;
using InfoTrack.Domain.Entities.Services.Interfaces;
using MediatR;

namespace InfoTrack.Application.MediatR.Commands
{
    public class CreateUserRequest(string email, string firstName, string lastName, string selectedTheme = "", DateTime? createdOn = null)
        : IRequest<CreateUserResponse>
    {
        public string Email { get; } = email;
        public string FirstName { get; } = firstName;
        public string LastName { get; } = lastName;
        public string SelectedTheme { get; } = selectedTheme;
        public DateTime CreatedOn { get; } = createdOn ?? DateTime.UtcNow;
        public DateTime LastModifiedOn { get; } = createdOn ?? DateTime.UtcNow;
    }

    public record CreateUserResponse(UserDto User);

    public class CreateUserHandler(IUserService userService, IMapper mapper)
        : IRequestHandler<CreateUserRequest, CreateUserResponse>
    {
        private readonly IMapper _mapper = mapper;
        private readonly IUserService _userService = userService;

        public async Task<CreateUserResponse> Handle(CreateUserRequest request, CancellationToken cancellationToken)
        {
            User user = new() { Email = request.Email, FirstName = request.FirstName, LastName = request.LastName, SelectedTheme = request.SelectedTheme, CreatedOn = DateTime.UtcNow };

            await _userService.CreateUser(user, cancellationToken);

            return new CreateUserResponse(_mapper.Map<UserDto>(user));
        }
    }
}
