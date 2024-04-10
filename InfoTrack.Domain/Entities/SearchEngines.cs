
namespace InfoTrack.Domain.Entities
{
    public class SearchEngines
    {
        public int Id { get; set; }
        public required string Name { get; set; }
        public required string BaseUrl { get; set; }
        public string? Description { get; set; }
    }

    //public enum SearchEngine
    //{
    //    Google = 0,
    //    Bing = 1,

    //}
}
