//using System;
//using System.Collections.Generic;
//using System.ComponentModel.DataAnnotations;
//using System.ComponentModel.DataAnnotations.Schema;
//using System.Linq;
//using System.Text;
//using System.Threading.Tasks;

//namespace InfoTrack.Infrastructure.Data.Entities
//{
//    public class SearchResultItem
//    {
//        [Key]
//        public int Id { get; set; }

//        [ForeignKey("SearchResults")]
//        public int SearchResultsId { get; set; }
//        public required SearchResults Results { get; set; }

//        [Required]
//        [MaxLength(255)]
//        public required string Url { get; set; }

//        [MaxLength(25)]
//        public required string ResultTypeCode { get; set; }
//    }
//}
