//using System.ComponentModel.DataAnnotations.Schema;
//using System.ComponentModel.DataAnnotations;
//using InfoTrack.Domain.Entities;

//namespace InfoTrack.Infrastructure.Data.Entities
//{
//    public class Query
//    {
//        [Key]
//        public int Id { get; set; }

//        [ForeignKey("User")]
//        public int UserId { get; set; }
//        public required User User { get; set; }

//        [ForeignKey("MyCompany")]
//        public int MyCompanyId { get; set; }
//        public required Company MyCompany { get; set; }

//        [ForeignKey("CompetitorCompany")]
//        public int? CompetitorCompanyId { get; set; }
//        public required Company CompetitorCompany { get; set; }

//        [ForeignKey("SearchEngine")]
//        public int? SearchEngineId { get; set; }
//        public required SearchEngines Engine { get; set; }

//        [Required]
//        public required string IncludeTerms { get; set; }

//        public string? ExcludeTerms { get; set; }

//        [Required]
//        public DateTime DateCreated { get; set; }

//        public DateTime? DateRemoved { get; set; }
//    }
//}
