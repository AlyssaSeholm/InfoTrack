using InfoTrack.Application.Common;
using InfoTrack.Domain.Entities;
using static InfoTrack.Application.Common.ResponseMessages;

namespace InfoTrack.Application.DTOs
{
    public class SearchResultsDto : BaseResponseDto
    {
        public required string Id { get; set; }
        public required string QueryId { get; set; }
        public int HighestRank { get; set; }
        public int Top100Count { get; set; }
        public required string ResultTypeCode { get; set; }
        public DateTime SearchedOn { get; set; }
        public required IEnumerable<SearchResultsItemDto> Items { get; set; }

        public SearchResultsDto() { }
        public SearchResultsDto(string id, string queryId, int highestRank = 0, int top100Count = 0, string resultType = "", string? msg = "")
        {
            Id = id;
            QueryId = queryId;
            HighestRank = highestRank;
            Top100Count = top100Count;
            ResultTypeCode = resultType;
            SearchedOn = DateTime.UtcNow;
            Msg = msg ?? "";
        }

        public static SearchResultsDto CreateEmptyWithMessage(StatusType msgType, string id = "", string queryId = "", int highestRank = 0, int top100Count = 0, string resultType = "")
        {
            var obj = new SearchResultsDto()
            {
                Id = id,
                QueryId = queryId,
                HighestRank = highestRank,
                Top100Count = top100Count,
                ResultTypeCode = resultType,
                SearchedOn = DateTime.UtcNow,
                Msg = ResponseMessages.GetMessage(msgType),
                Items = []
            };

            return obj;
        }
    }
}
