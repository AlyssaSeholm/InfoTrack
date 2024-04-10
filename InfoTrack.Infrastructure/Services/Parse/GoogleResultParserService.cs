using HtmlAgilityPack;
using InfoTrack.Domain.Entities;
using InfoTrack.Domain.Repositories.Interfaces;
using InfoTrack.Domain.Services.Interfaces;
using InfoTrack.Infrastructure.Repositories;
using System;
using System.Net;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory;

namespace InfoTrack.Infrastructure.Services.Parse
{
    public class GoogleResultParserService(ISearchRepository searchRepository, HttpClient httpClient) : IResultParserService
    {
        private readonly ISearchRepository _searchRepository = searchRepository;
        private readonly HttpClient _httpClient = httpClient;

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
                // Log and handle the exception
                Console.WriteLine("\nException Caught!");
                Console.WriteLine("Message :{0} ", e.Message);
                return "";
            }
        }
        //private void ParseImageTags(NijieImage image, HtmlDocument doc)
        //{
        //    var tagsDiv = doc.DocumentNode.SelectSingleNode("//div[@id='view-tag']");
        //    if (tagsDiv != null)
        //    {
        //        image.Tags = new List<NijieTag>();
        //        var tagNames = doc.DocumentNode.SelectNodes("//div[@id='view-tag']//span[@class='tag_name']");
        //        if (tagNames != null)
        //        {
        //            foreach (var tag in tagNames)
        //            {
        //                image.Tags.Add(new NijieTag() { Name = tag.InnerText });
        //            }
        //        }
        //    }
        //}
        public async Task<IEnumerable<ResultParse>> ParseResults(string htmlContent, CancellationToken cancellation)
        {
            if (htmlContent == null) { return Enumerable.Empty<ResultParse>(); }

            var doc = new HtmlDocument();
            doc.LoadHtml(htmlContent);

            var parseResults = new List<GoogleSearchResultParse>();

            // Assuming each result is contained within a div with a class of 'MjjYud'
            string objClass = "MjjYud";
            //doc.DocumentNode.SelectNodes("//a[@href]")//this xpath selects all anchor tags
            //var nodes = doc.DocumentNode.SelectNodes("//div[@id='news_list']/div/div[2]/h2/a");
            //var resultNodes = doc.DocumentNode.SelectNodes("//div[@id='main']");//($"//div[contains(@class, '{objClass}')]"); //("//div[@class='MjjYud']"); //var objects = doc.DocumentNode.SelectNodes("//div[contains(@class, 'your-object-class')]");
            var mainNode = doc.DocumentNode.SelectSingleNode("//div[@id='main']");
            var resultNodes = mainNode.SelectNodes("//a[@href][@data-ved]");
            // var web = new HtmlWeb();
            //var doc = await web.LoadFromWebAsync("https://forums.warframe.com/forum/3-pc-update-notes/");
            //var nodes = doc.DocumentNode.SelectNodes("/html/body/main/div/div/div/div[3]/div/ol/li/div/h4/span/a");
            //foreach (var node in nodes)
            //{
            //    result.Add(new WarframeUpdate { title = node.InnerText.Trim(), url = node.GetAttributeValue("href", "") });
            //}

            //     var chaps = doc.DocumentNode
            //.SelectNodes("//i[@class='d16 d45']/following-sibling::a")
            //.Select(n =>
            //{
            //    string url = n.Attributes["href"].Value;
            //    var resultUrl = new Uri(new Uri(manga), url).AbsoluteUri;
            //    return new Chapter(n.InnerText, resultUrl);
            //});

            //var nodes = doc.DocumentNode.SelectNodes("//a[starts-with(@href, '/api/playground')]");

            if (resultNodes != null)
            {
                foreach (var node in resultNodes)
                {
                    //Title & Link
                    var h3Text = node.SelectSingleNode(".//h3")?.InnerText?.Trim();
                    //var link = node.SelectSingleNode(".//a");
                    var href = node.GetAttributeValue("href", string.Empty);
                    //var href = link?.GetAttributeValue("href", string.Empty);
                    var ping = "";//node?.GetAttributeValue("ping", string.Empty);

                    //Image Src
                    //var img = node.SelectSingleNode(".//img");
                    var src = "";//img?.GetAttributeValue("src", string.Empty);

                    string? bc1_link = "", bc1_text = "", bc2_link = "", bc2_text = "", bc2_type = "";
                    bc1_text = node.ChildNodes[0].ChildNodes[1].InnerText;
                    bc1_text = WebUtility.UrlDecode(bc1_text);
                    bc2_text = node.ParentNode.NextSibling.InnerText;

                    //Cite/Breadcrumbs
                    //var cites = node?.SelectNodes("//cite");                    
                    //bc1_link = cites[0]?.InnerText?.Trim() ?? "";
                    //bc1_text = cites[0]?.SelectSingleNode(".//span")?.GetDirectInnerText() ?? ""; //.InnerText?.Trim();
                    //bc2_link = cites[1]?.InnerText?.Trim() ?? "";
                    //bc2_text = cites[1]?.SelectSingleNode(".//span")?.InnerText.Trim() ?? "";
                    //bc2_type = cites[1].ParentNode.ChildNodes[1]?.SelectSingleNode(".//span")?.GetDirectInnerText() ?? "";
                    

                    //Data Attributes
                    var dataVed = node?.GetAttributeValue("data-ved", string.Empty);
                    var data = node.SelectSingleNode($"//div[contains(@attribute, data-id)]");
                    var dataId = data?.GetAttributeValue("data-id", string.Empty);
                    var dataViewerGrp = data?.GetAttributeValue("data-viewer-group", string.Empty);

                    //Date & Snippet
                    var dataSncf = node.SelectSingleNode($"//div[contains(@attribute, data-sncf)]"); //Single or Multiple?
                    var dataSpans = dataSncf.SelectNodes(".//span"); //how does this handle nested spans?
                    var date = dataSpans[0]?.GetDirectInnerText() ?? "";
                    var matched = dataSpans[1]?.SelectSingleNode(".//em")?.GetDirectInnerText() ?? "";
                    var remainder = dataSpans[1]?.GetDirectInnerText() ?? "";

                    var parsedItem = new GoogleSearchResultParse()
                    {
                        Description = "",
                        Link = "",
                        Snippet = "",
                        DataVed = dataVed ?? "",
                        Href = href ?? "",
                        Ping = ping ?? "",
                        Title = h3Text ?? "",
                        Src = src ?? "",
                        Breadcrumbs1_text = bc1_text ?? "",
                        Breadcrumbs1_link = bc1_link ?? "",
                        Breadcrumbs2_text = bc2_text ?? "",
                        Breadcrumbs2_link = bc2_link ?? "",
                        Breadcrumbs2_type = bc2_type ?? "",
                        DataId = dataId ?? "",
                        DataViewerGroup = dataViewerGrp ?? "",
                        PostedDate = date ?? "",
                        Snippet_Match = matched ?? "",
                        Snippet_Remainder = remainder ?? ""
                    };
                    parseResults.Add(parsedItem);
                    //var titleNode = node.SelectSingleNode(".//h3");
                    //var linkNode = node.SelectSingleNode(".//a");
                    //var snippetNode = node.SelectSingleNode(".//span[@class='st']");

                    //var searchResultItem = new SearchResultItem
                    //{
                    //    Title = titleNode?.InnerText,
                    //    Link = linkNode?.GetAttributeValue("href", string.Empty),
                    //    Snippet = snippetNode?.InnerText
                    //};

                    //searchResults.Items.Add(searchResultItem);
                }
            }

            return parseResults;
        }

        public Task<SearchResults> SanitizeResults(IEnumerable<ResultParse> parsedItems, CancellationToken cancellation)
        {
            throw new NotImplementedException();
        }
    }
}
