
namespace InfoTrack.Domain.Entities
{
    public class SearchResultItem
    {
        public int Id { get; set; }
        public int SearchResultsId { get; set; }
        public required string Url { get; set; }
        public required string ResultTypeName { get; set; }

        //public string Notes { get; set; }

        //TODO: What data do I want to keep from the parsed results?

        public string[]? Tags { get; set; }
        public required SearchResults Results { get; set; }
    }
}
