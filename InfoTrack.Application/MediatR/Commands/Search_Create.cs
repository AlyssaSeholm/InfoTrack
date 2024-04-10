using AutoMapper;
using InfoTrack.Application.DTOs;
using InfoTrack.Domain.Entities;
using InfoTrack.Domain.Services.Interfaces;
using MediatR;

namespace InfoTrack.Application.MediatR.Commands
{
    public class CreateSearchRequest(int queryId)//, string resultTypeCode, int highestRank = 0, int top100Count = 0)//, string[]? includedTerms = null)
        : IRequest<CreateSearchResponse>
    {
        public int QueryId { get; } = queryId;
        //public int HighestRank { get; } = highestRank;
        //public int Top100Count { get; } = top100Count;
        ////public string[] IncludedTerms { get; } = includedTerms ?? [];
        //public string ResultTypeCode { get; } = resultTypeCode;
        //public DateTime SearchOn { get; } = DateTime.UtcNow;
    }

    public record CreateSearchResponse(SearchResultsDto Search);

    public class CreateSearchHandler(ISearchService SearchService, IMapper mapper)
        : IRequestHandler<CreateSearchRequest, CreateSearchResponse>
    {
        private readonly IMapper _mapper = mapper;
        private readonly ISearchService _SearchService = SearchService;

        public async Task<CreateSearchResponse> Handle(CreateSearchRequest request, CancellationToken cancellationToken)
        {
            //SearchResults Search = new() { QueryId = request.QueryId, HighestRank = request.HighestRank, Top100Count = request.Top100Count, ResultTypeCode = request.ResultTypeCode, SearchedOn = request.SearchOn };

            var results = await _SearchService.PerformSearch(request.QueryId, cancellationToken);

            return new CreateSearchResponse(_mapper.Map<SearchResultsDto>(results));
        }
    }
}
