using InfoTrack.Domain.Entities;

namespace InfoTrack.Domain.Services.Interfaces
{
    public interface IResultParserService
    {
        Task<string> PerformSearch(int queryId, CancellationToken cancellation);

        Task SaveHtmlContentToFile(string content, string filePath, CancellationToken cancellation);

        Task<IEnumerable<ResultParse>> ParseResults(string htmlContent, CancellationToken cancellation);

        Task<SearchResults?> SanitizeResults(int queryId, IEnumerable<ResultParse> parsedItems, CancellationToken cancellation);

    }
}
