using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InfoTrack.Domain.Entities
{
    public class ParsedSearchData
    {
        public int Id { get; set; }
        public int SearchResultsId { get; set; }
        public int CompanyProfileId { get; set; }
        public int Rank { get; set; }
        // Additional properties...
    }
}
