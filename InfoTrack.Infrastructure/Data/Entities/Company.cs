//using System;
//using System.Collections.Generic;
//using System.ComponentModel.DataAnnotations;
//using System.Linq;
//using System.Text;
//using System.Threading.Tasks;

//namespace InfoTrack.Infrastructure.Data.Entities
//{
//    public class Company
//    {
//        [Key]
//        public int Id { get; set; }

//        [Required]
//        [MaxLength(255)]
//        public required string Name { get; set; }

//        [Url]
//        [MaxLength(255)]
//        public string? BaseUrl { get; set; }

//        [Required]
//        public DateTime DateCreated { get; set; }

//        public DateTime? DateRemoved { get; set; }

//    }
//}
