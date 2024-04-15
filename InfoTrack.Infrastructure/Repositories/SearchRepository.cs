using InfoTrack.Domain.Entities;
using InfoTrack.Domain.Repositories.Interfaces;
using InfoTrack.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

namespace InfoTrack.Infrastructure.Repositories
{
    public class SearchRepository(IInfoTrackDbContext context)
        : Repository<SearchResults>(context), ISearchRepository
    {
        public async Task AddRangeAsync(List<SearchResultItem> srItems, CancellationToken cancellationToken)
        {
            await _context.SearchResultItems.AddRangeAsync(srItems, cancellationToken);
            await _context.SaveChangesAsync(cancellationToken);
        }

        public async Task<IEnumerable<SearchResults?>> GetListByQueryIdAsync(int queryId, CancellationToken cancellationToken)
        {
            var results = await _context.SearchResults.Where(sr => sr.QueryId == queryId).Include(sr => sr.Items).ToListAsync(cancellationToken);

            return results ?? Enumerable.Empty<SearchResults>();
        }

        public async Task<IEnumerable<SearchResults?>> GetListByUserIdAsync(int userId, CancellationToken cancellationToken)
        {
            List<int> queryIds = await _context.Queries.Where(q => q.UserId == userId).Select(uc => uc.Id).ToListAsync(cancellationToken);

            var results = await _context.SearchResults.Where(sr => queryIds.Contains(sr.Id)).Include(sr => sr.Items).ToListAsync(cancellationToken);

            return results ?? Enumerable.Empty<SearchResults?>();
        }

        public async Task<Query?> GetQueryByQueryId(int queryId, CancellationToken cancellationToken)
        {
            return await _context.Queries.Where(q => q.Id == queryId).FirstOrDefaultAsync(cancellationToken);
        }
        public async Task<SearchEngines?> GetSearchEngineByEngineId(int engineId, CancellationToken cancellationToken)
        {
            return await _context.SearchEngines.Where(q => q.Id == engineId).FirstOrDefaultAsync(cancellationToken);
        }
    }
}
