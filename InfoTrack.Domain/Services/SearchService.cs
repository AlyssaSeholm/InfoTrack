using InfoTrack.Domain.Entities;
using InfoTrack.Domain.Repositories.Interfaces;
using InfoTrack.Domain.Services.Interfaces;

namespace InfoTrack.Domain.Services
{
    public class SearchService(ISearchRepository SearchRepository, IResultParserService resultParserService) : ISearchService
    {
        private readonly ISearchRepository _SearchRepository = SearchRepository;
        private readonly IResultParserService _resultParserService = resultParserService;


        public async Task<SearchResults?> PerformSearch(int query, CancellationToken cancellationToken)
        {
            var htmlResults = await _resultParserService.PerformSearch(query, cancellationToken);
            var parsedResults = await _resultParserService.ParseResults(htmlResults, cancellationToken);
            var sanitizeResults = await _resultParserService.SanitizeResults(parsedResults, cancellationToken);

            //TODO: Add Save functionality here

            return sanitizeResults;
        }

        public async Task<IEnumerable<SearchResults?>> GetSearchResultsByQueryId(int queryId, CancellationToken cancellationToken)
        {
            return await _SearchRepository.GetListByUserIdAsync(queryId, cancellationToken);
        }
        public async Task<IEnumerable<SearchResults?>> GetSearchResultsByQueryId(string queryId, CancellationToken cancellationToken)
        {
            bool isValidInt = int.TryParse(queryId, out int result);

            if (!isValidInt) { return []; }

            return await GetSearchResultsByQueryId(result, cancellationToken);
        }

        public async Task<IEnumerable<SearchResults?>> GetSearchResultsByUserId(int queryId, CancellationToken cancellationToken)
        {
            return await _SearchRepository.GetListByUserIdAsync(queryId, cancellationToken);
        }
        public async Task<IEnumerable<SearchResults?>> GetSearchResultsByUserId(string queryId, CancellationToken cancellationToken)
        {
            bool isValidInt = int.TryParse(queryId, out int result);

            if (!isValidInt) { return []; }

            return await GetSearchResultsByUserId(result, cancellationToken);
        }
    }
}
