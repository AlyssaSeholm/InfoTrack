using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InfoTrack.Domain.Models
{
    public class QueryModel
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public required string SearchTerms { get; set; }
        public required string ExcludeTerms { get; set; }
        public DateTime DateCreated { get; set; }
        // Additional properties...
    }
}
