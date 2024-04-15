using AutoMapper;
using InfoTrack.Application.DTOs;
using InfoTrack.Domain.Entities.Services.Interfaces;
using MediatR;

namespace InfoTrack.Application.MediatR.Commands
{
    public record PatchCompanyRequest(int Id, Dictionary<string, object> UpdatedFields) 
        : IRequest<PatchCompanyResponse>;

    public record PatchCompanyResponse(CompanyDto Company);

    public class PatchCompanyHandler(ICompanyService companyService, IMapper mapper) 
        : IRequestHandler<PatchCompanyRequest, PatchCompanyResponse>
    {
        private readonly ICompanyService _companyService = companyService;
        private readonly IMapper _mapper = mapper;

        public async Task<PatchCompanyResponse> Handle(PatchCompanyRequest request, CancellationToken cancellationToken)
        {
            // Retrieve the existing company
            var company = await _companyService.GetCompanyById(request.Id, cancellationToken);

            // Apply the updates from request.UpdatedFields to the company object.
            // This might involve some custom logic or using a library like AutoMapper's conditional mapping features.

            await _companyService.UpdateCompany(company, cancellationToken);

            return new PatchCompanyResponse(_mapper.Map<CompanyDto>(company));
        }
    }
}
