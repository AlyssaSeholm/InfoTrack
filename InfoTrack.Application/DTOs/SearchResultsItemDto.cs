using InfoTrack.Application.Common;
using static InfoTrack.Application.Common.ResponseMessages;

namespace InfoTrack.Application.DTOs
{
    public class ResultsBreadCrumbs {
        public string? Text { get; set; }
        public string? Link { get; set; }
    }
    public class SearchResultsItemDto : BaseResponseDto
    {
        public required string Id { get; set; }
        public required string SearchResultsId { get; set; }
        public required string Url { get; set; }
        public required string ResultTypeName { get; set; }
        //TODO: What data do I want to keep from the parsed results?
        public string[]? Tags { get; set; }
        public required ResultsBreadCrumbs BreadCrumbs { get; set; }
        public int? ResultRank { get; set; }


        public SearchResultsItemDto() { }
        public SearchResultsItemDto(string id, string searchResultsId, string url = "", string resultTypeName = "", string[]? tags = null, string? msg = "", int? resultRank = null)
        {
            Id = id;
            SearchResultsId = searchResultsId;
            Url = url;
            ResultTypeName = resultTypeName;
            Tags = tags ?? [];
            Msg = msg ?? "";
            BreadCrumbs = new ResultsBreadCrumbs();
            ResultRank = resultRank;
        }

        public static SearchResultsItemDto CreateEmptyWithMessage(StatusType msgType, string id = "", string searchResultsId = "", string url = "", string resultTypeName = "", string[]? tags = null, int? resultRank = null)
        {
            var obj = new SearchResultsItemDto()
            {
                Id = id,
                SearchResultsId = searchResultsId,
                Url = url,
                ResultTypeName = resultTypeName,
                Tags = tags ?? [],
                Msg = ResponseMessages.GetMessage(msgType),
                BreadCrumbs = new ResultsBreadCrumbs(),
                ResultRank = resultRank
            };

            return obj;
        }
    }
}
