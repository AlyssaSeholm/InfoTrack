using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InfoTrack.Domain.Entities.Models
{
    public class SearchResultItemModel
    {
        public int Id { get; set; }
        public required string Url { get; set; }
        public string[]? Tags { get; set; }
    }
}
