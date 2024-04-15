

using InfoTrack.Domain.Entities;

namespace InfoTrack.Infrastructure.Services.Interfaces
{
    public interface ISearchService
    {
        Task<ResultMsg> PerformSearch(int query, CancellationToken cancellationToken);

        Task<IEnumerable<SearchResults?>> GetSearchResultsByUserId(int userId, CancellationToken cancellationToken);
        Task<IEnumerable<SearchResults?>> GetSearchResultsByUserId(string userId, CancellationToken cancellationToken);

        Task<IEnumerable<SearchResults?>> GetSearchResultsByQueryId(int queryId, CancellationToken cancellationToken);
        Task<IEnumerable<SearchResults?>> GetSearchResultsByQueryId(string queryId, CancellationToken cancellationToken);
    }
}
