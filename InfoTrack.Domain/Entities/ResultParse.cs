
namespace InfoTrack.Domain.Entities
{
    public class ResultParse
    {
        public int ResultRank { get; set; }
        public string? Description { get; set; }
        public string? Title { get; set; }
        public string? Link { get; set; }
        public string? Snippet { get; set; }
        public string? Href { get; set; }
        public string? Breadcrumbs_Text { get; set; }
        public string? Breadcrumbs_Link { get; set; }
        public string? DataVed { get; set; }
    }
    public class GoogleSearchResultParse : ResultParse
    {
        public string? DataId { get; set; }
        public string? DataViewerGroup { get; set; }
        public string? PostedDate { get; set; }
        public string? Snippet_Match { get; set; }
        public string? Snippet_Remainder { get; set; }
    }
}
