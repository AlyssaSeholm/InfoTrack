using InfoTrack.Domain.Entities;
using InfoTrack.Domain.Repositories.Interfaces;
using InfoTrack.Domain.Services.Interfaces;

namespace InfoTrack.Domain.Services
{
    public class UserService(IUserRepository UserRepository) : IUserService
    {
        private readonly IUserRepository _UserRepository = UserRepository;

        public async Task<User> CreateUser(User user, CancellationToken cancellationToken)
        {
            return await _UserRepository.AddAsync(user, cancellationToken);
        }

        public async Task<string> DeleteUserById(int id, CancellationToken cancellationToken)
        {
            var user = await _UserRepository.GetByIdAsync(id, cancellationToken);
            if (user != null)
            {
                var userName = $"{user.FirstName} {user.LastName?[0]}";
                await _UserRepository.DeleteAsync(user, cancellationToken);
                return userName;
            }
            return string.Empty;
        }

        public async Task<User?> GetUserById(int userId, CancellationToken cancellationToken)
        {
            return await _UserRepository.GetByIdAsync(userId, cancellationToken);
        }

        public async Task<User?> GetUserByEmail(string email, CancellationToken cancellationToken)
        {
            return await _UserRepository.GetByEmailAsync(email, cancellationToken);
        }

        public async Task<User> PatchUser(User user, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }

        public async Task<User> UpdateUser(User user, CancellationToken cancellationToken)
        {
            await _UserRepository.UpdateAsync(user, cancellationToken);
            return user;
        }
    }
}
