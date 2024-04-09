using AutoMapper;
using InfoTrack.Application.DTOs;
using InfoTrack.Domain.Entities;
using InfoTrack.Domain.Services.Interfaces;
using MediatR;

namespace InfoTrack.Application.Mediatr.Commands
{
    public class CreateCompanyRequest(int userId, string name, string baseUrl, string relationshipType, int? primaryCompanyId = null, string[]? includedTerms = null)
        : IRequest<CreateCompanyResponse>
    {
        //public int Id { get; } = id;
        public int UserId { get; } = userId;
        public int? PrimaryCompanyId { get; } = primaryCompanyId;
        public string? RelationshipType { get; } = relationshipType;
        public string Name { get; } = name;
        public string[] IncludedTerms { get; } = includedTerms ?? [];
        public string BaseUrl { get; } = baseUrl;
        public DateTime CreatedOn { get; } = DateTime.UtcNow;
    }

    public record CreateCompanyResponse(CompanyDto Company);

    public class CreateCompanyHandler(ICompanyService companyService, IMapper mapper) 
        : IRequestHandler<CreateCompanyRequest, CreateCompanyResponse>
    {
        private readonly IMapper _mapper = mapper;
        private readonly ICompanyService _companyService = companyService;

        public async Task<CreateCompanyResponse> Handle(CreateCompanyRequest request, CancellationToken cancellationToken)
        {
            Company company = new() { UserId = request.UserId, PrimaryCompanyId = request.PrimaryCompanyId, RelationshipType = request.RelationshipType, Name = request.Name, BaseUrl = request.BaseUrl, IncludeTerms = request.IncludedTerms, CreatedOn = DateTime.UtcNow, DateRemoved = null };

            await _companyService.CreateCompany(company, cancellationToken);

            return new CreateCompanyResponse(_mapper.Map<CompanyDto>(company));
        }
    }
}
