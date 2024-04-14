using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InfoTrack.Domain.Models
{
    public class SearchResultsModel
    {
        public int Id { get; set; }
        public int QueryId { get; set; }
        //public int CompanyId { get; set; }
        public int HighestRank { get; set; }
        public int Top100Count { get; set; }
        // Additional properties...
    }
}
