
namespace InfoTrack.Domain.Entities
{
    public class Query
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public int MyCompanyId { get; set; }
        public int? CompetitorCompanyId { get; set; }
        public int? SearchEngineId { get; set; }

        public required string IncludeTerms { get; set; }
        public string? ExcludeTerms { get; set; }

        public DateTime DateCreated { get; set; }
        public DateTime? DateRemoved { get; set; }


        public required User User { get; set; }
        public required Company MyCompany { get; set; }
        public required Company CompetitorCompany { get; set; }
        public required SearchEngines Engine { get; set; }
    }
}
