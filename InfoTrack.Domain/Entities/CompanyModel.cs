using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InfoTrack.Domain.Models
{
    public class CompanyModel
    {
        public Guid Id { get; set; }
        public required string Name { get; set; }
        public string? BaseUrl { get; set; }

        public required CompanyType Type { get; set; }

        public required string[] IncludeTerms { get; set; }

        // Additional properties...
    }
    public class MyCompanyModel : CompanyModel
    {
        public required string[] ExcludeTerms { get; set; }
    }
    public class OtherCompaniesModel : CompanyModel
    {
        //public Guid CompanyId { get; set; }
        public required bool ExcludeFromResults { get; set; } = false;
        public required string[] Tags;
    }

    public class CompetitorCompanyModel : OtherCompaniesModel
    {
        // Specific properties for competitors...
    }

    public class RelatedCompanyModel : OtherCompaniesModel
    {
    }

    public enum CompanyType
    {
        Self = 1,
        Competitor = 2,
        Related = 3,
        Parent = 4
    }
}
