using HtmlAgilityPack;
using InfoTrack.Domain.Entities;
using InfoTrack.Domain.Services.Interfaces;

namespace InfoTrack.Infrastructure.Services.Parse
{
    public class GoogleResultParserService : IResultParserService
    {
        public IEnumerable<ResultParse> ParseResults(string htmlContent)
        {
            if (htmlContent == null) { return Enumerable.Empty<ResultParse>(); }

            var doc = new HtmlDocument();
            doc.LoadHtml(htmlContent);

            var parseResults = new List<GoogleSearchResultParse>();

            // Assuming each result is contained within a div with a class of 'MjjYud'
            string objClass = "MjjYud";
            var resultNodes = doc.DocumentNode.SelectNodes($"//div[contains(@class, '{objClass}')]"); //("//div[@class='MjjYud']"); //var objects = doc.DocumentNode.SelectNodes("//div[contains(@class, 'your-object-class')]");

            if (resultNodes != null)
            {
                foreach (var node in resultNodes)
                {
                    //Title & Link
                    var h3Text = node.SelectSingleNode(".//h3")?.InnerText?.Trim();
                    var link = node.SelectSingleNode(".//a");
                    var href = link?.GetAttributeValue("href", string.Empty);
                    var ping = link?.GetAttributeValue("ping", string.Empty);

                    //Image Src
                    var img = node.SelectSingleNode(".//img");
                    var src = img?.GetAttributeValue("src", string.Empty);

                    //Cite/Breadcrumbs
                    var cites = node.SelectNodes("//cite");
                    var bc1_link = cites[0]?.InnerText?.Trim();
                    var bc1_text = cites[0]?.SelectSingleNode(".//span")?.GetDirectInnerText() ?? ""; //.InnerText?.Trim();
                    var bc2_link = cites[1]?.InnerText?.Trim();
                    var bc2_text = cites[1]?.SelectSingleNode(".//span")?.InnerText?.Trim();
                    var bc2_type = cites[1].ParentNode.ChildNodes[1]?.SelectSingleNode(".//span")?.GetDirectInnerText() ?? "";

                    //Data Attributes
                    var dataVed = node.GetAttributeValue("data-ved", string.Empty);
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

        public IEnumerable<SearchResults> SanitizeResults(IEnumerable<ResultParse> parsedItems)
        {
            throw new NotImplementedException();
        }
    }
}
