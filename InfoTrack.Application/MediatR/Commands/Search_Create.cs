using AutoMapper;
using InfoTrack.Application.DTOs;
using InfoTrack.Domain.Entities;
using InfoTrack.Infrastructure.Services.Interfaces;
using MediatR;

namespace InfoTrack.Application.MediatR.Commands
{
    public class CreateSearchRequest(int queryId)
        : IRequest<CreateSearchResponse>
    {
        public int QueryId { get; } = queryId;
    }

    public record CreateSearchResponse(SearchResultsDto SearchResults, bool Success, string Msg);

    public class CreateSearchHandler(ISearchService SearchService, IMapper mapper)
        : IRequestHandler<CreateSearchRequest, CreateSearchResponse>
    {
        private readonly IMapper _mapper = mapper;
        private readonly ISearchService _SearchService = SearchService;

        public async Task<CreateSearchResponse> Handle(CreateSearchRequest request, CancellationToken cancellationToken)
        {
            //SearchResults Search = new() { QueryId = request.QueryId, HighestRank = request.HighestRank, Top100Count = request.Top100Count, ResultTypeCode = request.ResultTypeCode, SearchedOn = request.SearchOn };

            var results = await _SearchService.PerformSearch(request.QueryId, cancellationToken);


            return new CreateSearchResponse(_mapper.Map<SearchResultsDto>(results.Data), results.Success, results.ErrorMessage);
        }
    }
}
