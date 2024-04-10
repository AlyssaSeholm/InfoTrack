using InfoTrack.Domain.Entities;
using InfoTrack.Domain.Repositories.Interfaces;
using InfoTrack.Domain.Services.Interfaces;
using Microsoft.Extensions.Hosting;
using System.Net;

namespace InfoTrack.Infrastructure.Services.Parse
{
    public abstract class ResultParserService(ISearchRepository searchRepository, HttpClient httpClient, IHostEnvironment webHostEnvironment) 
        : IResultParserService
    {
        protected readonly ISearchRepository _searchRepository = searchRepository;
        protected readonly HttpClient _httpClient = httpClient;
        protected readonly IHostEnvironment _webHostEnvironment = webHostEnvironment;

        public async Task<string> PerformSearch(int queryId, CancellationToken cancellationToken)
        {
            //todo: if (cancellationToken.IsCancellationRequested) {}

            var query = await _searchRepository.GetQueryByQueryId(queryId, cancellationToken);
            if (query == null) { return ""; }

            var searchEngine = await _searchRepository.GetSearchEngineByEngineId(query.SearchEngineId, cancellationToken);
            if (searchEngine == null) { return ""; }

            return await MakeEngineSEORequest(searchEngine.BaseUrl, query.IncludeTerms);//TODO: add excluded

            //Todo: Save Results
        }

        private async Task<string> MakeEngineSEORequest(string baseUrl, string query)
        {
            var encodedQuery = WebUtility.UrlEncode(query);

            //https://www.google.com/search?num=100&q=efiling+integration
            var fullUrl = $"{baseUrl}{encodedQuery}";

            try
            {
                var response = await _httpClient.GetAsync(fullUrl);
                response.EnsureSuccessStatusCode();
                var content = await response.Content.ReadAsStringAsync();
                return content;
            }
            catch (HttpRequestException e)
            {
                Console.WriteLine("\nException Caught!");
                Console.WriteLine("Message :{0} ", e.Message);
                return "";
            }
        }

        public static async Task SaveHtmlContentToFile(string content, string filePath, CancellationToken cancellation)
        {
            try
            {
                await File.WriteAllTextAsync(filePath, content, cancellation);
            }
            catch (Exception ex)
            {
                Console.WriteLine($"An error occurred while saving the file: {ex.Message}");
            }
        }

        public abstract Task<IEnumerable<ResultParse>> ParseResults(string htmlContent, CancellationToken cancellation);

        public Task<SearchResults> SanitizeResults(IEnumerable<ResultParse> parsedItems, CancellationToken cancellation)
        {
            throw new NotImplementedException();
        }

    }
}
