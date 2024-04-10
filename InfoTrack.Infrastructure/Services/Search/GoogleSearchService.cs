using InfoTrack.Domain.Entities;
using System.Net;
using System.Text.RegularExpressions;
using InfoTrack.Domain.Services.Interfaces;

namespace InfoTrack.Infrastructure.Services.Search
{
    public class GoogleSearchService(HttpClient httpClient) //: ISearchService
    {
        private readonly HttpClient _httpClient = httpClient;

        public async Task<SearchResults?> PerformSearch(string query)
        {
            // Implement calling Google search and saving the raw results
            // Ensure the query is URL-encoded
            var encodedQuery = WebUtility.UrlEncode(query);
            var url = $"https://www.google.com/search?num=100&q={encodedQuery}"; //TODO: move the url into the searchenging object

            try
            {
                var response = await _httpClient.GetAsync(url);
                response.EnsureSuccessStatusCode();

                //TODO: Get Query Id

                var content = await response.Content.ReadAsStringAsync();
                //var history = new SearchResults() {
                //    Id = 0,
                //    HighestRank = 3,
                //    QueryId = 1,
                //    Top100Count = 7,
                //    SearchedOn = DateTime.Now,
                //    Query = new Query()
                //    //SavedQueryId = 0,
                //    //RawResults = content,
                //    //TimeRan = DateTime.Now
                //};

                return null;
            }
            catch (HttpRequestException e)
            {
                // Log and handle the exception
                Console.WriteLine("\nException Caught!");
                Console.WriteLine("Message :{0} ", e.Message);
                return null;
            }
        }

        private string RemoveSearchResponseBloat(string query)
        {
            //Remove script & style tags w/ their contents
            string pattern = @"^[^>]*?(<(script|style)[^>]*?>)([^<])*<([^>]*?)\/([^>]*?)(script|style)[^>]*?>";
            string outputHtml = Regex.Replace(query, pattern, "", RegexOptions.Multiline | RegexOptions.IgnoreCase);
            Console.WriteLine($"RemoveSearchResponseBloat: {outputHtml}");
            return outputHtml;
        }
    }
}
