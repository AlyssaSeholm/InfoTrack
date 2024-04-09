
namespace InfoTrack.Domain.Entities
{
    public class Company
    {
        public Company() { }

        public Company(int id, int userId, string name, string[] includedTerms, string baseUrl, int? primaryCompanyId = null, string? relationshipType = null, DateTime? removedOn= null)
        {
            Id = id;
            UserId = userId;
            PrimaryCompanyId = primaryCompanyId;
            RelationshipType = relationshipType;
            Name = name;
            BaseUrl = baseUrl;
            IncludeTerms = includedTerms;
            CreatedOn = DateTime.UtcNow;
            DateRemoved = removedOn;
        }

        // Entity properties
        public int Id { get; set; }
        public int UserId { get; set; }
        public int? PrimaryCompanyId { get; set; }
        public string? RelationshipType { get; set; }
        public required string Name { get; set; }
        public required string BaseUrl { get; set; }
        public required string[] IncludeTerms { get; set; }

        public DateTime CreatedOn { get; set; }
        public DateTime? DateRemoved { get; set; }

        public User? User { get; set; }
        public Company? PrimaryParentCompany { get; set; }
    }

    public enum CompanyType
    {
        Self = 1,
        Competitor = 2,
        Related = 3,
        Parent = 4
    }
}
