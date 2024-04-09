using InfoTrack.Domain.Entities;

namespace InfoTrack.Domain.Services.Interfaces
{
    public interface IResultParserService
    {
        IEnumerable<ResultParse> ParseResults(string htmlContent);

        IEnumerable<SearchResults> SanitizeResults(IEnumerable<ResultParse> parsedItems);
    }
}
