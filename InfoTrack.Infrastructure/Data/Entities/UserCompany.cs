
//using System.ComponentModel.DataAnnotations.Schema;
//using System.ComponentModel.DataAnnotations;
//using InfoTrack.Domain.Entities;

//namespace InfoTrack.Infrastructure.Data.Entities
//{
//    public class UserCompany
//    {
//        [Key]
//        public int Id { get; set; }

//        [ForeignKey("User")]
//        public int UserId { get; set; }
//        public required User User { get; set; }

//        [ForeignKey("Company")]
//        public int CompanyId { get; set; }
//        public required Company Company { get; set; }
        
//        [Required]
//        [MaxLength(50)]
//        public string? RelationshipType { get; set; }

//        public string? KeyTerms { get; set; }

//        [Required]
//        public DateTime DateCreated { get; set; }

//        public DateTime? DateRemoved { get; set; }
//    }
//}
