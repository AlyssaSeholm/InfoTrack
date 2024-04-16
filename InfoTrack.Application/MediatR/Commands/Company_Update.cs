using AutoMapper;
using InfoTrack.Application.DTOs;
using InfoTrack.Domain.Entities;
using InfoTrack.Domain.Entities.Services.Interfaces;
using InfoTrack.Domain.Entities.Services;
using MediatR;

namespace InfoTrack.Application.MediatR.Commands
{
    public record UpdateCompanyRequest(int Id, string CompanyName, string[] IncludedTerms, string BaseUrl, DateTime CreatedOn) 
        : IRequest<UpdateCompanyResponse>;

    public record UpdateCompanyResponse(CompanyDto Company);

    public class UpdateCompanyHandler(ICompanyService companyService, IMapper mapper) 
        : IRequestHandler<UpdateCompanyRequest, UpdateCompanyResponse>
    {
        private readonly ICompanyService _companyService = companyService;
        private readonly IMapper _mapper = mapper;

        public async Task<UpdateCompanyResponse> Handle(UpdateCompanyRequest request, CancellationToken cancellationToken)
        {
            Company company = new()
            {
                Id = request.Id,
                Name = request.CompanyName,
                BaseUrl = request.BaseUrl,
                IncludeTerms = request.IncludedTerms,
                CreatedOn = request.CreatedOn,
                // Assuming DateRemoved logic or other properties are handled appropriately
            };

            await _companyService.UpdateCompany(company, cancellationToken);

            return new UpdateCompanyResponse(_mapper.Map<CompanyDto>(company));
        }
    }
}
