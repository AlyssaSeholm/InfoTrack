using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InfoTrack.Domain.Models
{
    public class SearchEnginesModel
    {
        public int Id { get; set; }
        public required string Name { get; set; }
        public required string BaseUrl { get; set; }
    }
}
