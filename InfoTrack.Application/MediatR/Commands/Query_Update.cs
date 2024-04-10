using AutoMapper;
using InfoTrack.Application.Common;
using InfoTrack.Application.DTOs;
using InfoTrack.Domain.Services.Interfaces;
using MediatR;

namespace InfoTrack.Application.MediatR.Commands
{
    public record UpdateQueryRequest(int Id, string? IncludedTerms = null, string? Name = null, string? ExcludeTerms = null)
        : IRequest<UpdateQueryResponse>;

    public record UpdateQueryResponse(QueryDto Query);
    public class UpdateQueryHandler(IQueryService queryService, IMapper mapper)
        : IRequestHandler<UpdateQueryRequest, UpdateQueryResponse>
    {
        private readonly IQueryService _queryService = queryService;
        private readonly IMapper _mapper = mapper;

        public async Task<UpdateQueryResponse> Handle(UpdateQueryRequest request, CancellationToken cancellationToken)
        {
            var query = await _queryService.GetQueryById(request.Id, cancellationToken);

            if (query == null)
            {
                return new UpdateQueryResponse(QueryDto.CreateEmptyWithMessage(ResponseMessages.StatusType.NotFound));
            }

            if (!string.IsNullOrEmpty(request.IncludedTerms)) { query.IncludeTerms = request.IncludedTerms; }
            if (!string.IsNullOrEmpty(request.Name)) { query.Name = request.Name; }
            if (!string.IsNullOrEmpty(request.ExcludeTerms)) { query.ExcludeTerms = request.ExcludeTerms; }

            await _queryService.UpdateQuery(query, cancellationToken);

            return new UpdateQueryResponse(_mapper.Map<QueryDto>(query));
        }
    }

}
