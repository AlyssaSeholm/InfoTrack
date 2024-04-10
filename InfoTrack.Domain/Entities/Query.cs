namespace InfoTrack.Domain.Entities
{
    public class Query
    {
        public Query() { }

        public Query(int id, int userId, int companyId, string name, string includeTerms, int searchEngineId = 0, int? competitorCompanyId = null, string? excludeTerms = "")
        {
            Id = id;
            UserId = userId;
            MyCompanyId = companyId;
            CompetitorCompanyId = competitorCompanyId;
            Name = name;
            SearchEngineId = searchEngineId;
            IncludeTerms = includeTerms;
            ExcludeTerms = excludeTerms;
            DateCreated = DateTime.UtcNow;
            DateRemoved = null;
        }

        public int Id { get; set; }
        public int UserId { get; set; }
        public int MyCompanyId { get; set; }
        public int? CompetitorCompanyId { get; set; }
        public int SearchEngineId { get; set; }
        public required string Name { get; set; }

        public required string IncludeTerms { get; set; }
        public string? ExcludeTerms { get; set; }

        public DateTime DateCreated { get; set; }
        public DateTime? DateRemoved { get; set; }


        public User? User { get; set; }
        public Company? MyCompany { get; set; }
        public Company? CompetitorCompany { get; set; }
        public SearchEngines? Engine { get; set; }
        public IEnumerable<SearchResults>? Results { get; set; }
    }
}
