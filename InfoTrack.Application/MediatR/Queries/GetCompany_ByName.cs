using AutoMapper;
using InfoTrack.Application.Common;
using InfoTrack.Application.DTOs;
using InfoTrack.Domain.Services.Interfaces;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace InfoTrack.Application.MediatR.Queries
{
    //public record GetCompanyByNameRequest(string Name) : IRequest<GetCompanyByNameResponse>;
    public class GetCompanyByNameRequest : IRequest<GetCompanyByNameResponse>
    {
        [FromRoute]
        public required string Name { get; set; }
    }

    public record GetCompanyByNameResponse(CompanyDto Company);

    public class GetCompanyByNameHandler(ICompanyService companyService, IMapper mapper) 
        : IRequestHandler<GetCompanyByNameRequest, GetCompanyByNameResponse>
    {
        private readonly ICompanyService _companyService = companyService;
        private readonly IMapper _mapper = mapper;

        public async Task<GetCompanyByNameResponse> Handle(GetCompanyByNameRequest request, CancellationToken cancellationToken)
        {
            var company = await _companyService.GetCompanyByName(request.Name, cancellationToken);

            if (company == null)
            {
                return new GetCompanyByNameResponse(CompanyDto.CreateEmptyWithMessage(ResponseMessages.StatusType.NotFound, name: request.Name));
            }

            var companyDto = _mapper.Map<CompanyDto>(company);

            return new GetCompanyByNameResponse(companyDto);
        }
    }
}
