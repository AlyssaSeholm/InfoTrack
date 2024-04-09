//using InfoTrack.Application.Common;
//using InfoTrack.Application.Models;
//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Text;
//using System.Threading.Tasks;
//using static InfoTrack.Application.Common.ResponseMessages;

//namespace InfoTrack.Application.DTOs
//{
//    public class UserCompanyDto : BaseResponseDto
//    {
//        //public required string Id { get; set; }
//        public required string UserId { get; set; }
//        public required string CompanyId { get; set; }
//        /// <summary>
//        /// Null if this is the primary/main/default. Otherwise the UserCompanyId of the company this relates to.
//        /// </summary>
//        public string? PrimaryCompanyId { get; set; }
//        public DateTime DateCreated { get; set; }
//        public string? RelationshipType { get; set; }
//        public DateTime? DateRemoved { get; set; }

        
//        public required string CompanyName { get; set; }
//        public required string BaseUrl { get; set; }
//        public string? KeyTerms { get; set; } //not passing back IncludeTerms from Company obj


//        public UserCompanyDto() { }

//        public UserCompanyDto(string userId, string companyId, string? primaryCompanyId = null, string? relationshipType = null, string? keyTerms = null, DateTime? createdOn = null, DateTime? removedOn = null, string? msg = "")
//        {
//            //Id = id;
//            UserId = userId;
//            CompanyId = companyId;
//            PrimaryCompanyId = primaryCompanyId;
//            RelationshipType = relationshipType;
//            KeyTerms = keyTerms;
//            DateCreated = createdOn ?? DateTime.UtcNow;
//            DateRemoved = removedOn;
//            Msg = msg ?? "";
//        }


//        public static UserCompanyDto CreateEmptyWithMessage(StatusType msgType, string userId = "", string companyId = "", string? primaryCompanyId = null, string relationshipType = "", string? keyTerms = null, DateTime? createdOn = null, DateTime? removedOn = null)
//        {
//            var obj = new UserCompanyDto()
//            {
//                UserId = userId,
//                CompanyId = companyId,
//                PrimaryCompanyId = primaryCompanyId,
//                RelationshipType = relationshipType,
//                KeyTerms = keyTerms,
//                DateCreated = createdOn ?? DateTime.UtcNow,
//                Msg = ResponseMessages.GetMessage(msgType)
//            };

//            return obj;
//        }
//    }
//}
