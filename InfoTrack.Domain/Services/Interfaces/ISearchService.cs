using InfoTrack.Domain.Entities;

namespace InfoTrack.Domain.Services.Interfaces
{
    public interface ISearchService
    {
        Task<SearchResults?> PerformSearchAsync(string query);
    }
}
