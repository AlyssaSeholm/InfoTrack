using InfoTrack.Domain.Interfaces;
using InfoTrack.Domain.Models;

namespace InfoTrack.Infrastructure.Services
{
    public class ResultParserService : IResultParserService
    {
        public async Task<IEnumerable<SearchResultsModel>> ParseResultsAsync(string rawResults)
        {
            // Implement parsing logic to extract ranking data
            return Enumerable.Empty<SearchResultsModel>();
        }
    }
}
