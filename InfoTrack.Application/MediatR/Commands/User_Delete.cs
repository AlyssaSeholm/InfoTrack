using InfoTrack.Domain.Entities.Services.Interfaces;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace InfoTrack.Application.MediatR.Commands
{
    public class DeleteUserByIdRequest : IRequest<DeleteUserByIdResponse>
    {
        [FromRoute]
        public int Id { get; set; }
    }

    /// <summary> DeletedUserName will be empty string if no User was deleted </summary>
    /// <param name="DeletedName">Will be empty if the User lookup failed to return a User entity.</param>
    public record DeleteUserByIdResponse(string DeletedName);

    public class DeleteUserByIdHandler(IUserService userService) : IRequestHandler<DeleteUserByIdRequest, DeleteUserByIdResponse>
    {
        private readonly IUserService _userService = userService;

        public async Task<DeleteUserByIdResponse> Handle(DeleteUserByIdRequest request, CancellationToken cancellationToken)
        {
            var result = await _userService.DeleteUserById(request.Id, cancellationToken);

            return new DeleteUserByIdResponse(result);
        }
    }
}
