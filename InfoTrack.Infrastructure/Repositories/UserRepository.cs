using InfoTrack.Domain.Repositories.Interfaces;
using InfoTrack.Infrastructure.Data;
using InfoTrack.Infrastructure.Repositories;
using Microsoft.EntityFrameworkCore;

namespace InfoTrack.Domain.Entities.Repositories
{
    public class UserRepository(IInfoTrackDbContext context)
        : Repository<User>(context), IUserRepository
    {
        public async Task<User?> GetByEmailAsync(string email, CancellationToken cancellationToken)
        {
            return await _context.Users.FirstOrDefaultAsync(u => u.Email == email, cancellationToken);
        }
    }
}
