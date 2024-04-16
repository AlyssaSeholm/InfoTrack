using AutoMapper;
using InfoTrack.Application.DTOs;
using InfoTrack.Domain.Entities;
using InfoTrack.Domain.Entities.Services.Interfaces;
using MediatR;

namespace InfoTrack.Application.MediatR.Commands
{
    public class CreateQueryRequest(int userId, int companyId, string includeTerms = "", string? name = "", int searchEngineId = 1, int? numberOfResultsPulled = 100,  int? competitorCompanyId = null, string? excludeTerms = "")
        : IRequest<CreateQueryResponse>
    {
        public int UserId { get; } = userId;
        public int CompanyId { get; } = companyId;
        public int SearchEngineId { get; } = searchEngineId;
        public int? NumberOfResultsPulled { get; } = numberOfResultsPulled;
        public string Name { get; } = name ?? $"Query {DateTime.UtcNow}";
        public string IncludeTerms { get; } = includeTerms;
        public int? CompetitorCompanyId { get; } = competitorCompanyId;
        public string? ExcludeTerms { get; } = excludeTerms;
    }

    public record CreateQueryResponse(QueryDto Query);

    public class CreateQueryHandler(IQueryService queryService, IMapper mapper)
        : IRequestHandler<CreateQueryRequest, CreateQueryResponse>
    {
        private readonly IMapper _mapper = mapper;
        private readonly IQueryService _queryService = queryService;

        public async Task<CreateQueryResponse> Handle(CreateQueryRequest request, CancellationToken cancellationToken)
        {
            Query query = new() { UserId = request.UserId, MyCompanyId = request.CompanyId, CompetitorCompanyId = request.CompetitorCompanyId, SearchEngineId = request.SearchEngineId, Name = request.Name, IncludeTerms = request.IncludeTerms, ExcludeTerms = request.ExcludeTerms };

            await _queryService.CreateQuery(query, cancellationToken);

            return new CreateQueryResponse(_mapper.Map<QueryDto>(query));
        }
    }
}
