

using InfoTrack.Application.Common;
using static InfoTrack.Application.Common.ResponseMessages;

namespace InfoTrack.Application.DTOs
{
    public class CompanyDto : BaseResponseDto
    {
        public required string Id { get; set; }
        public string? PrimaryCompanyId { get; set; }
        public string? RelationshipType { get; set; }
        public required string Name { get; set; }
        public required string BaseUrl { get; set; }
        public required string[] IncludeTerms { get; set; }

        public DateTime CreatedOn { get; set; }
        public DateTime? DateRemoved { get; set; }


        public CompanyDto() { }
        public CompanyDto(string id, string name, string baseUrl, string[]? includedTerms = null, string msg = "", string? primaryCompanyId = null, string? relationshipType = null, DateTime? removedOn = null)
        {
            Id = id;
            PrimaryCompanyId = primaryCompanyId;
            RelationshipType = relationshipType;
            Name = name;
            BaseUrl = baseUrl;
            IncludeTerms = includedTerms ?? [];
            CreatedOn = DateTime.UtcNow;
            DateRemoved = removedOn;
            Msg = msg;
        }


        public static CompanyDto CreateEmptyWithMessage(StatusType msgType, string id = "0", string name = "", string baseUrl = "", string[]? includeTerms = null, string? primaryCompanyId = null, string? relationshipType = null, DateTime? removedOn = null)
        {
            var obj = new CompanyDto()
            {
                Id = id,
                PrimaryCompanyId = primaryCompanyId,
                RelationshipType = relationshipType,
                Name = name,
                BaseUrl = baseUrl,
                IncludeTerms = includeTerms ?? [],
                CreatedOn = DateTime.UtcNow,
                DateRemoved = removedOn,
                Msg = ResponseMessages.GetMessage(msgType)
            };

            return obj;
        }
    }


    public class DeleteCompanyDto : BaseResponseDto
    {
        public required string Name { get; set; }


        public DeleteCompanyDto() { }
        public DeleteCompanyDto(string name, string msg = "")
        {
            Name = name;
            Msg = msg;
        }


        public static DeleteCompanyDto CreateEmptyWithMessage(StatusType msgType, string name = "")
        {
            var obj = new DeleteCompanyDto()
            {
                Name = name,
                Msg = ResponseMessages.GetMessage(msgType)
            };

            return obj;
        }
    }
}
