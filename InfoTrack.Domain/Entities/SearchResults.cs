
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

        public Query? Query { get; set; }
        public IEnumerable<SearchResultItem>? Items { get; set; }
    }
}
