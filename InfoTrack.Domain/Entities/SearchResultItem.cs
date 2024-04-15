
namespace InfoTrack.Domain.Entities
{
    public class SearchResultItem
    {
        public int Id { get; set; }
        public int SearchResultsId { get; set; }
        public required string Url { get; set; }
        public required string ResultTypeName { get; set; }

        public int? ResultRank { get; set; }
        public string? Snippet { get; set; }
        public string? Breadcrumbs_Text { get; set; }
        public string? Breadcrumbs_Link { get; set; }
        public string? Title { get; set; }
        public string? Href { get; set; }
        public string? DataVed { get; set; }

        //public string Notes { get; set; }

        //TODO: What data do I want to keep from the parsed results?

        public string[]? Tags { get; set; }
        public SearchResults? Results { get; set; }

        public SearchResultItem()
        {
            Id = 0;
            SearchResultsId = 0;
            ResultRank = null;
            Url = string.Empty;
            ResultTypeName = string.Empty;
            Snippet = string.Empty;
            Breadcrumbs_Text = string.Empty;
            Breadcrumbs_Link = string.Empty;
            Title = string.Empty;
            Href = string.Empty;
            DataVed = string.Empty;
            Tags = [];            
        }
        public SearchResultItem(int id, int searchResultsId, string url, string resultTypeName, string snippet, string breadcrumbs_Text, string breadcrumbs_Link, string title, string href, string dataVed, int resultRank, string[] tags)
        {
            Id = id;
            SearchResultsId = searchResultsId;
            Url = url;
            ResultTypeName = resultTypeName;
            Snippet = snippet;
            Breadcrumbs_Text = breadcrumbs_Text;
            Breadcrumbs_Link = breadcrumbs_Link;
            Title = title;
            Href = href;
            DataVed = dataVed;
            ResultRank = resultRank;
            Tags = tags;
        }
    }
}
