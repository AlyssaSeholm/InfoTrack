using AutoMapper;
using InfoTrack.Application.DTOs;
using InfoTrack.Infrastructure.Services.Interfaces;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace InfoTrack.Application.MediatR.Queries
{
    public class GetAllSearchResultsByUserIdRequest : IRequest<GetAllSearchResultsByUserIdResponse>
    {
        [FromRoute]
        public required string UserId { get; set; }
    }

    public record GetAllSearchResultsByUserIdResponse(IEnumerable<SearchResultsDto> SearchResults);

    public class GetAllSearchResultsByUserIdHandler(ISearchService searchService, IMapper mapper)
        : IRequestHandler<GetAllSearchResultsByUserIdRequest, GetAllSearchResultsByUserIdResponse>
    {
        private readonly ISearchService _searchService = searchService;
        private readonly IMapper _mapper = mapper;

        public async Task<GetAllSearchResultsByUserIdResponse> Handle(GetAllSearchResultsByUserIdRequest request, CancellationToken cancellationToken)
        {
            var results = await _searchService.GetSearchResultsByUserId(request.UserId, cancellationToken);

            var resultsDtos = _mapper.Map<IEnumerable<SearchResultsDto>>(results);

            return new GetAllSearchResultsByUserIdResponse(resultsDtos);
        }
    }
}
