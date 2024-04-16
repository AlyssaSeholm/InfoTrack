using InfoTrack.Domain.Entities;
using InfoTrack.Domain.Entities.Services.Interfaces;

namespace InfoTrack.Domain.Entities.Services.Search
{
    public class YahooSearchService(HttpClient httpClient) //: ISearchService
    {
        private readonly HttpClient _httpClient = httpClient;

        public async Task<SearchResults?> PerformSearchAsync(string query)
        {
            throw new NotImplementedException();
        }
    }
}
