using AutoMapper;
using InfoTrack.Application.DTOs;
using InfoTrack.Domain.Services.Interfaces;
using MediatR;

namespace InfoTrack.Application.MediatR.Queries
{
    public record GetAllCompaniesRequest : IRequest<GetAllCompaniesResponse>;

    public record GetAllCompaniesResponse(IEnumerable<CompanyDto> Companies);

    public class GetAllCompaniesHandler(ICompanyService companyService, IMapper mapper) 
        : IRequestHandler<GetAllCompaniesRequest, GetAllCompaniesResponse>
    {
        private readonly ICompanyService _companyService = companyService;
        private readonly IMapper _mapper = mapper;

        public async Task<GetAllCompaniesResponse> Handle(GetAllCompaniesRequest request, CancellationToken cancellationToken)
        {
            var companies = await _companyService.GetCompanyList(cancellationToken);
            
            var companiesDto = _mapper.Map<IEnumerable<CompanyDto>>(companies);

            return new GetAllCompaniesResponse(companiesDto);
        }
    }
}
