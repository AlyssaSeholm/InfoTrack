using HtmlAgilityPack;
using InfoTrack.Domain.Entities;
using InfoTrack.Domain.Repositories.Interfaces;
using Microsoft.Extensions.Hosting;
using System.Net;
using System.Text;

namespace InfoTrack.Infrastructure.Services.Parse
{

    public class GoogleResultParserService(ISearchRepository searchRepository, HttpClient httpClient, IHostEnvironment webHostEnvironment) 
        : ResultParserService(searchRepository, httpClient, webHostEnvironment) 
    {
        public override async Task<IEnumerable<ResultParse>> ParseResults(string htmlContent, CancellationToken cancellation)
        {
            if (htmlContent == null) { return Enumerable.Empty<ResultParse>(); }

            var doc = new HtmlDocument();
            doc.LoadHtml(htmlContent);

            var parseResults = new List<GoogleSearchResultParse>();
            
            var mainNode = doc.DocumentNode.SelectSingleNode("//div[@id='main']");
            var resultNodes = mainNode.SelectNodes("//a[@href][@data-ved]");
            var htmlContentsStringBuilder = new StringBuilder();


            if (resultNodes != null)
            {
                var iter = 0;
                foreach (var node in resultNodes)
                {
                    iter++;
                    //Save nodes to file to see what HTML is available and what data can be used
                    htmlContentsStringBuilder.AppendLine($"----------------------------------Count: {iter}----------------------------------"); // Separator for readability
                    htmlContentsStringBuilder.AppendLine("  ** InnerHtml** ");
                    htmlContentsStringBuilder.AppendLine(node.InnerHtml);
                    htmlContentsStringBuilder.AppendLine("  ** OuterHtml** ");
                    htmlContentsStringBuilder.AppendLine(node.OuterHtml);
                    htmlContentsStringBuilder.AppendLine("  ** END** ");

                    //Title & Link
                    var h3Text = node?.SelectSingleNode(".//h3")?.InnerText?.Trim();
                    var href = node?.GetAttributeValue("href", string.Empty);

                    string? bc1_link = "", bc1_text = "", bc2_link = "", bc2_text = "", bc2_type = "";
                    bool checkForBreadcrumbText = false;
                    if (node?.ChildNodes?.Count > 0 && node?.ChildNodes[0].ChildNodes?.Count > 1) { checkForBreadcrumbText = true; }
                    bc1_text = checkForBreadcrumbText ? node?.ChildNodes?[0]?.ChildNodes?[1]?.InnerText : ""; //&#8250;
                    bc1_text = WebUtility.UrlDecode(bc1_text);
                    bc2_text = node?.ParentNode?.NextSibling?.InnerText ?? "";

                    //Data Attributes
                    var dataVed = node?.GetAttributeValue("data-ved", string.Empty);

                    //Date & Snippet
                    var dataSncf = node?.SelectSingleNode($"//div[contains(@attribute, data-sncf)]"); //Single or Multiple?

                    var parsedItem = new GoogleSearchResultParse()
                    {
                        Description = "",
                        Link = "",
                        Snippet = node?.OuterHtml ?? "",
                        DataVed = dataVed ?? "",
                        Href = href ?? "",
                        Title = h3Text ?? "",
                        Breadcrumbs_Text = bc1_text ?? "",
                        Breadcrumbs_Link = bc1_link ?? "",
                        DataId = "",
                        DataViewerGroup = "",
                        PostedDate = "", //date ?? "",
                        Snippet_Match = "", //matched ?? "",
                        Snippet_Remainder = "", //remainder ?? ""
                    };
                    parseResults.Add(parsedItem);
                }
            }

            var filePath = Path.Combine(_webHostEnvironment.ContentRootPath, "RawParseResults.txt");
            await SaveHtmlContentToFile(htmlContentsStringBuilder.ToString(), filePath, cancellation);

            return parseResults;
        }
    }
}
