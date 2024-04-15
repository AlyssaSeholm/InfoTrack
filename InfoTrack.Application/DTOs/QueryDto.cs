using InfoTrack.Application.Common;
using static InfoTrack.Application.Common.ResponseMessages;

namespace InfoTrack.Application.DTOs
{
    public class QueryDto : BaseResponseDto
    {
        public required string Id { get; set; }
        public required string UserId { get; set; }
        public required string MyCompanyId { get; set; }
        public string? CompetitorCompanyId { get; set; }
        public string? SearchEngineId { get; set; }
        public string? Name { get; set; }

        public required string IncludeTerms { get; set; }
        public string? ExcludeTerms { get; set; }
        public DateTime DateCreated { get; set; }

        public QueryDto() { }
        public QueryDto(
            string id, 
            string userId, 
            string companyId, 
            string includeTerms = "", 
            string? competitorCompanyId = null, 
            string? excludeTerms = "", 
            string? searchEngineId = "1", 
            string? msg = "",
            string? name = "")
        {
            Id = id;
            UserId = userId;
            MyCompanyId = companyId;
            CompetitorCompanyId = competitorCompanyId;
            SearchEngineId = searchEngineId;
            IncludeTerms = includeTerms;
            ExcludeTerms = excludeTerms;
            DateCreated = DateTime.UtcNow;
            Msg = msg ?? "";
            Name = name ?? "";
        }

        public static QueryDto CreateEmptyWithMessage(
            StatusType msgType, 
            string id = "", 
            string userId = "", 
            string companyId = "", 
            string includeTerms = "", 
            string? competitorCompanyId = null, 
            string? excludeTerms = "", 
            string? searchEngineId = "1",
            string? name = "unnamed")
        {
            var obj = new QueryDto()
            {
                Id = id,
                UserId = userId,
                MyCompanyId = companyId,
                CompetitorCompanyId = competitorCompanyId,
                SearchEngineId = searchEngineId,
                IncludeTerms = includeTerms,
                ExcludeTerms = excludeTerms,
                DateCreated = DateTime.UtcNow,
                Msg = ResponseMessages.GetMessage(msgType),
                Name = name ?? ""
            };

            return obj;
        }
    }
}
