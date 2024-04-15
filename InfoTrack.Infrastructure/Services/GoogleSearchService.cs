//using InfoTrack.Infrastructure.Services.Interfaces;
//using System.Net;

//namespace InfoTrack.Domain.Entities.Services
//{
//    public class GoogleSearchService : ISearchService
//    {
//        private readonly HttpClient _httpClient;

//        public GoogleSearchService(HttpClient httpClient)
//        {
//            _httpClient = httpClient;
//        }

//        public async Task<SearchResultsModel?> PerformSearchAsync(string query)
//        {
//            // Implement calling Google search and saving the raw results
//            // Ensure the query is URL-encoded
//            var encodedQuery = WebUtility.UrlEncode(query);
//            //TODO!!!
//            var url = $"https://www.google.com/search?num=100&q={encodedQuery}"; //TODO: move the url into the searchenging object

//            try
//            {
//                var response = await _httpClient.GetAsync(url);
//                response.EnsureSuccessStatusCode();

//                //TODO: Get Query Id

//                var content = await response.Content.ReadAsStringAsync();
//                var history = new SearchResultsModel() {
//                    Id = 0,
//                    HighestRank = 3,
//                    QueryId = 1,
//                    Top100Count = 7
//                };

//                return history;
//            }
//            catch (HttpRequestException e)
//            {
//                // Log and handle the exception
//                Console.WriteLine("\nException Caught!");
//                Console.WriteLine("Message :{0} ", e.Message);
//                return null;
//            }
//        }
//    }
//}
