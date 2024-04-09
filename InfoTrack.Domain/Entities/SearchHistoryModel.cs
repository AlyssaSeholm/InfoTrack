
namespace InfoTrack.Domain.Entities
{
    public class SearchHistoryModel
    {
        public int Id { get; set; }
        public int SavedQueryId { get; set; }
        public required string RawResults { get; set; }
        public DateTime RanOn { get; set; }
    }
}
