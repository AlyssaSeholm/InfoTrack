
using InfoTrack.Domain.Entities;

namespace InfoTrack.Infrastructure.Services.Interfaces
{
    public interface IResultParserService
    {
        Task<ResultMsg<string>> PerformSearch(int queryId, CancellationToken cancellation);

        Task SaveHtmlContentToFile(string content, string filePath, CancellationToken cancellation);

        Task<IEnumerable<ResultParse>> ParseResults(string htmlContent, CancellationToken cancellation);

        Task<ResultMsg<SearchResults?>> SanitizeResults(int queryId, IEnumerable<ResultParse> parsedItems, CancellationToken cancellation);

    }
}
