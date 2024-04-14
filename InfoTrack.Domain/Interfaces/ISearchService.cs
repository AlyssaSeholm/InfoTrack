using InfoTrack.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InfoTrack.Domain.Interfaces
{
    public interface ISearchService
    {
        Task<SearchResultsModel?> PerformSearchAsync(string query);
    }
}
