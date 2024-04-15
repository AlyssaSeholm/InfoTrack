using InfoTrack.Domain.Entities;
using InfoTrack.Domain.Repositories.Interfaces;
using InfoTrack.Domain.Services.Interfaces;
using Microsoft.Extensions.Hosting;
using System.Net;
using System.Text.RegularExpressions;
using System.Threading;
using System.Web;

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

            int results = query.NumberOfResultsPulled ?? 100;
            return await MakeEngineSEORequest(searchEngine.BaseUrl, results, query.IncludeTerms);//TODO: add excluded

            //Todo: Save Results
        }

        private async Task<string> MakeEngineSEORequest(string baseUrl, int results, string query)
        {
            var encodedQuery = WebUtility.UrlEncode(query);

            //https://www.google.com/search?num=100&q=efiling+integration
            var url = baseUrl.Replace("###", results.ToString());
            var fullUrl = $"{url}{encodedQuery}";

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

        public async Task SaveHtmlContentToFile(string content, string filePath, CancellationToken cancellation)
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

        public async Task<SearchResults?> SanitizeResults(int queryId, IEnumerable<ResultParse> parsedItems, CancellationToken cancellation)
        {

            var query = await _searchRepository.GetQueryByQueryId(queryId, cancellation);
            if (query == null) return null; // or handle this case appropriately

            var terms = query.IncludeTerms.Split(',', StringSplitOptions.RemoveEmptyEntries).Select(t => t.Trim()).ToList();
            List<ResultParse> items = parsedItems.ToList() ?? []; // Converting to list if we need to access items by index or modify them

    
            var srchResult = await _searchRepository.AddAsync(
            new SearchResults { QueryId = queryId, ResultTypeCode = "In Progress", SearchedOn = DateTime.Now }, 
                cancellation);

            var searchItems = await ExtractDetailsFromParsedItems(items, terms, query, srchResult.Id, cancellation);

            srchResult.Items = searchItems.ToList();

            return await ComprehensiveDataFromResults(query, srchResult, cancellation);
        }

        private async Task<IEnumerable<SearchResultItem>> ExtractDetailsFromParsedItems(
           List<ResultParse> items, List<string> terms, Query query, int searchResultId, CancellationToken cancellation)
        {        

                var tasks = items.Select(async item =>
                {
                    List<string> tags = [];
                    List<string> links = [item.Link, item.Href];

                    // Checking terms against various fields in the item
                    if (terms.Any(term => item.Description?.IndexOf(term, StringComparison.OrdinalIgnoreCase) >= 0 ||
                                        item.Title?.IndexOf(term, StringComparison.OrdinalIgnoreCase) >= 0 ||
                                        links.Any(link => link?.IndexOf(term, StringComparison.OrdinalIgnoreCase) >= 0)))
                    {
                        tags.Add("keyterm match");
                    }

                    if (!string.IsNullOrEmpty(query.MyCompany?.BaseUrl) && links.Any(link => link.Contains(query.MyCompany.BaseUrl, StringComparison.OrdinalIgnoreCase)))
                    {
                        tags.Add("direct link");
                    }

                    // Only create a SearchResultItem if there are tags
                    if (tags.Count > 0)
                    {
                        var url = !string.IsNullOrEmpty(item.Link)
                            ? item.Link
                            : (!string.IsNullOrEmpty(item.Href) ? ExtractUrlFromHref(item.Href) : "");

                        var relationship = tags.Contains("direct link") ? "Direct" : "Mentioned";

                        return new SearchResultItem
                        {
                            Url = url,
                            ResultTypeName = relationship,
                            Snippet = item.Description,
                            Breadcrumbs_Text = item.Breadcrumbs_Text,
                            Breadcrumbs_Link = item.Breadcrumbs_Link,
                            Title = item.Title,
                            Href = item.Href,
                            DataVed = item.DataVed,
                            Tags = [.. tags],
                            SearchResultsId = searchResultId,
                            ResultRank = item.ResultRank                            
                        };
                    }
                    return null;
                }).Where(task => task != null);

                var resultItems = await Task.WhenAll(tasks);
                var filteredItems = resultItems.Where(item => item != null);


                if (filteredItems.Any())
                {
                    await _searchRepository.AddRangeAsync(filteredItems.Where(item => item != null).ToList()!, cancellation);
                }

                return filteredItems.Where(item => item != null).ToList()!;

            // List<SearchResultItem> srItems = [];
            // // Using parallel processing to handle large datasets efficiently
            // _ = Parallel.ForEach(items, item =>
            // {
            //     List<string> tags = [];


            //     if (terms.Any(term => item.Description?.IndexOf(term, StringComparison.OrdinalIgnoreCase) >= 0) ||
            //         terms.Any(term => item.Title?.IndexOf(term, StringComparison.OrdinalIgnoreCase) >= 0) ||
            //         terms.Any(term => item.Link?.IndexOf(term, StringComparison.OrdinalIgnoreCase) >= 0) ||
            //         terms.Any(term => item.Href?.IndexOf(term, StringComparison.OrdinalIgnoreCase) >= 0) ||
            //         terms.Any(term => item.Breadcrumbs_Text?.IndexOf(term, StringComparison.OrdinalIgnoreCase) >= 0) ||
            //         terms.Any(term => item.Breadcrumbs_Link?.IndexOf(term, StringComparison.OrdinalIgnoreCase) >= 0))
            //     {
            //         tags.Add("keyterm match");
            //     }
            //     else if (terms.Any(term => item.Snippet?.IndexOf(term, StringComparison.OrdinalIgnoreCase) >= 0))
            //     {
            //         tags.Add("html match");
            //     }

            //     List<string> links = [item.Link, item.Href];
            //     if (!string.IsNullOrEmpty(query.MyCompany?.BaseUrl) && links.Any(term => query.MyCompany.BaseUrl.Contains(term, StringComparison.OrdinalIgnoreCase)))
        //     {
            //         tags.Add("direct link");
            //     }

            //     if (tags.Count > 0)
            //     {

            //         string url = !string.IsNullOrEmpty(item.Link)
            //             ? item.Link
            //             : (!string.IsNullOrEmpty(item.Href) ? ExtractUrlFromHref(item.Href) : "");

            //         string relationship = tags.Contains("direct link") ? "Direct" : "Mentioned";

            //         srItems.Add(new SearchResultItem
            //         {
            //             Url = url,
            //             ResultTypeName = relationship,
            //             Snippet = item.Description,
            //             Breadcrumbs_Text = item.Breadcrumbs_Text,
            //             Breadcrumbs_Link = item.Breadcrumbs_Link,
            //             Title = item.Title,
            //             Href = item.Href,
            //             DataVed = item.DataVed,
            //             Tags = [.. tags],
            //             SearchResultsId = searchResultId // Set the Results property to null or assign the appropriate value
            //         });
            //     }
            // });

            // await _searchRepository.AddRangeAsync(srItems, cancellation);
            
            // return srItems;
        }

        private async Task<SearchResults> ComprehensiveDataFromResults(Query query, SearchResults searchResult, CancellationToken cancellation)
        {
            searchResult.Top100Count = searchResult.Items?.Select(x => x.Tags?.Length != 0).Count() ?? 0;

            searchResult.ResultTypeCode = searchResult.Top100Count > 0 ? "Success" : "No Results Found";

            searchResult.HighestRank = searchResult.Items?.Select(x => x.ResultRank).Min() ?? 0;

            await _searchRepository.UpdateAsync(searchResult, cancellation);

            return searchResult;
        }

        private string ExtractUrlFromHref(string href)
        {
            var pattern = @"\/url\?q=(.*?)&";
            var match = Regex.Match(href, pattern);

            if (match.Success)
            {
                return HttpUtility.UrlDecode(match.Groups[1].Value);
            }

            return ""; 
        }

    }
}
