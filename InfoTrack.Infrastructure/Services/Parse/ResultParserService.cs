using InfoTrack.Domain.Entities;
using InfoTrack.Domain.Services.Interfaces;

namespace InfoTrack.Infrastructure.Services.Parse
{
    public class ResultParserService : IResultParserService
    {
        public IEnumerable<ResultParse> ParseResults(string htmlContent)
        {
            // Implement parsing logic to extract ranking data
            return Enumerable.Empty<ResultParse>();
        }

        public IEnumerable<SearchResults> SanitizeResults(IEnumerable<ResultParse> parsedItems)
        {
            throw new NotImplementedException();
        }
    }
}
