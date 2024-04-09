using AutoMapper;
using InfoTrack.Domain.Entities;
using InfoTrack.Infrastructure.Data;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace InfoTrack.Application.MediatR.Queries
{
    public record GetSearchResultsByQueryIdRequest(int QueryId) : IRequest<GetSearchResultsByQueryIdResponse>;

    public record GetSearchResultsByQueryIdResponse(List<SearchResults> SearchResults);

    public class GetSearchResultsByQueryIdHandler(IInfoTrackDbContext context, IMapper mapper) 
        : IRequestHandler<GetSearchResultsByQueryIdRequest, GetSearchResultsByQueryIdResponse>
    {
        private readonly IInfoTrackDbContext _context = context;
        private readonly IMapper _mapper = mapper;

        public async Task<GetSearchResultsByQueryIdResponse> Handle(GetSearchResultsByQueryIdRequest request, CancellationToken cancellationToken)
        {
            //TODO: Add back 'AsNoTracking()'
            var results = await _context.SearchResults.ToListAsync(cancellationToken); ////var SearchResultsByQueryId = await _context.SearchResultsByQueryId.AsNoTracking().ToListAsync(cancellationToken);
            var response = new GetSearchResultsByQueryIdResponse(_mapper.Map<List<SearchResults>>(results));

            return response;
        }
    }
}
