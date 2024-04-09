
namespace InfoTrack.Domain.Entities
{
    /// <summary>
    /// Not Used, but it was a time issue as I didn't have the time/capacity to rely on having company profiles and user profiles.
    /// </summary>
    public class UserCompany
    {
        
        public UserCompany() { }

        public UserCompany(int id, int userId, int companyId, string? relationshipType = null, string? keyTerms = null, DateTime? createdOn = null, DateTime? removedOn = null)
        {
            Id = id;
            UserId = userId;
            CompanyId = companyId;
            RelationshipType = relationshipType;
            KeyTerms = keyTerms;
            DateCreated = createdOn ?? DateTime.UtcNow;
            DateRemoved = removedOn;
        }

        public int Id { get; set; }
        public int UserId { get; set; }
        public int CompanyId { get; set; }
        /// <summary>
        /// Null if this is the primary/main/default. Otherwise the UserCompanyId of the company this relates to.
        /// </summary>
        public int? PrimaryCompanyId { get; set; }
        public DateTime DateCreated { get; set; }
        public string? RelationshipType { get; set; }
        public string? KeyTerms { get; set; }
        public DateTime? DateRemoved { get; set; }

        public User? User { get; set; }
        public Company? Company { get; set; }
        public Company? PrimaryParentCompany { get; set; }
    }
}
