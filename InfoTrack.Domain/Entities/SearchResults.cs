
namespace InfoTrack.Domain.Entities
{
    public class SearchResults
    {
        public int Id { get; set; }
        public int QueryId { get; set; }
        public int HighestRank { get; set; }
        public int Top100Count { get; set; }
        public DateTime SearchedOn { get; set; }
        public required string ResultTypeCode { get; set; }

        public required Query Query { get; set; }
        public required IEnumerable<SearchResultItem> Items { get; set; }
    }
}
