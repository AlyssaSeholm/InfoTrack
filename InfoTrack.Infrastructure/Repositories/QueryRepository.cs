using InfoTrack.Domain.Entities;
using InfoTrack.Domain.Repositories.Interfaces;
using InfoTrack.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

namespace InfoTrack.Infrastructure.Repositories
{
    public class QueryRepository(IInfoTrackDbContext context)
        : Repository<Query>(context), IQueryRepository
    {
        public async Task<IEnumerable<Query?>> GetListByUserIdAsync(string userId, CancellationToken cancellationToken)
        {
           var queries = await _context.Queries.Where(q => q.UserId.ToString() == userId).ToListAsync(cancellationToken);

            return queries ?? Enumerable.Empty<Query?>();
        }

    }
}
