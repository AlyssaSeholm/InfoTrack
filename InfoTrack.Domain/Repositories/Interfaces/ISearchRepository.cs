using InfoTrack.Domain.Entities;

namespace InfoTrack.Domain.Repositories.Interfaces
{
    public interface ISearchRepository : IRepository<SearchResults>
    {
        Task<IEnumerable<SearchResults?>> GetListByUserIdAsync(int userId, CancellationToken cancellationToken);
        Task<IEnumerable<SearchResults?>> GetListByQueryIdAsync(int queryId, CancellationToken cancellationToken);
        Task<Query?> GetQueryByQueryId(int queryId, CancellationToken cancellationToken);
        Task<SearchEngines?> GetSearchEngineByEngineId(int engineId, CancellationToken cancellationToken);
    }
}
