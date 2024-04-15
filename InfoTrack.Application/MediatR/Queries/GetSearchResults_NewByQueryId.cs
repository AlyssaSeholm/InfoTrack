using AutoMapper;
using InfoTrack.Application.DTOs;
using InfoTrack.Infrastructure.Services.Interfaces;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace InfoTrack.Application.MediatR.Queries
{
    public class GetNewSearchResultsByQueryIdRequest : IRequest<GetNewSearchResultsByQueryIdResponse>
    {
        [FromRoute]
        public required int QueryId { get; set; }
    }

    public record GetNewSearchResultsByQueryIdResponse(SearchResultsDto SearchResults);

    public class GetNewSearchResultsByQueryIdHandler(ISearchService searchService, IMapper mapper)
        : IRequestHandler<GetNewSearchResultsByQueryIdRequest, GetNewSearchResultsByQueryIdResponse>
    {
        private readonly ISearchService _searchService = searchService;
        private readonly IMapper _mapper = mapper;

        public async Task<GetNewSearchResultsByQueryIdResponse> Handle(GetNewSearchResultsByQueryIdRequest request, CancellationToken cancellationToken)
        {
            var results = await _searchService.PerformSearch(request.QueryId, cancellationToken);

            return new GetNewSearchResultsByQueryIdResponse(_mapper.Map<SearchResultsDto>(results));
        }
    }
}
