
namespace InfoTrack.Domain.Entities
{
    public class SearchEngines
    {
        public int Id { get; set; }
        public required string Name { get; set; }
        public required string BaseUrl { get; set; }
        public string? Description { get; set; }
    }
}
