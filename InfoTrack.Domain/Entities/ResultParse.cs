
namespace InfoTrack.Domain.Entities
{
    public class ResultParse
    {
        public string? Description { get; set; }
        public string? Link { get; set; }
        public string? Snippet { get; set; }
    }
    public class GoogleSearchResultParse : ResultParse
    {
        public string? DataVed { get; set; }
        public string? Href { get; set; }
        //public string? Ping { get; set; }
        public string? Title { get; set; }
        public string? Breadcrumbs { get; set; }
        //public string? Src { get; set; }
        //public string? Breadcrumbs1_text { get; set; }
        //public string? Breadcrumbs1_link { get; set; }
        //public string? Breadcrumbs2_text { get; set; }
        //public string? Breadcrumbs2_link { get; set; }
        //public string? Breadcrumbs2_type { get; set; }
        public string Breadcrumbs_Text { get; set; }
        public string Breadcrumbs_Link { get; set; }
        public string? DataId { get; set; }
        public string? DataViewerGroup { get; set; }
        public string? PostedDate { get; set; }
        public string? Snippet_Match { get; set; }
        public string? Snippet_Remainder { get; set; }
    }
}
