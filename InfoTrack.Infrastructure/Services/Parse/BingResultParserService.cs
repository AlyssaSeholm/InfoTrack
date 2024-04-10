using InfoTrack.Domain.Entities;
using InfoTrack.Domain.Services.Interfaces;

namespace InfoTrack.Infrastructure.Services.Parse
{
    public class BingResultParserService : IResultParserService
    {
        public Task<IEnumerable<ResultParse>> ParseResults(string htmlContent, CancellationToken cancellation)
        {
            throw new NotImplementedException();
        }

        public Task<string> PerformSearch(int queryId, CancellationToken cancellation)
        {
            throw new NotImplementedException();
        }

        public Task<SearchResults> SanitizeResults(IEnumerable<ResultParse> parsedItems, CancellationToken cancellation)
        {
            throw new NotImplementedException();
        }
    }
}
