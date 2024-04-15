using InfoTrack.Domain.Entities;

namespace InfoTrack.Domain.Entities.Services.Interfaces
{
    public interface IUserService
    {
        Task<User?> GetUserById(int userId, CancellationToken cancellationToken);
        Task<User?> GetUserByEmail(string email, CancellationToken cancellationToken); 
        
        Task<User> CreateUser(User user, CancellationToken cancellationToken);
        Task<User> UpdateUser(User user, CancellationToken cancellationToken);
        Task<User> PatchUser(User user, CancellationToken cancellationToken);
        Task<string> DeleteUserById(int id, CancellationToken cancellationToken);
    }
}
