using InfoTrack.Domain.Entities;
using InfoTrack.Domain.Services.Interfaces;

namespace InfoTrack.Infrastructure.Services.Search
{
    public class BingSearchService(HttpClient httpClient)// : ISearchService
    {
        private readonly HttpClient _httpClient = httpClient;

        public async Task<SearchResults?> PerformSearchAsync(string query)
        {
            throw new NotImplementedException();
        }
    }
}
