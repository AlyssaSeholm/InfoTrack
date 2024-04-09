using AutoMapper;
using InfoTrack.Application.DTOs;
using InfoTrack.Domain.Services.Interfaces;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace InfoTrack.Application.MediatR.Queries
{
    //public record GetAllCompaniesByUserIdRequest(string UserId) : IRequest<GetAllCompaniesByUserIdResponse>;
    public class GetAllCompaniesByUserIdRequest : IRequest<GetAllCompaniesByUserIdResponse>
    {
        [FromRoute]
        public required string UserId { get; set; }
    }

    public record GetAllCompaniesByUserIdResponse(IEnumerable<CompanyDto> Companies);

    public class GetAllCompaniesByUserIdHandler(ICompanyService companyService, IMapper mapper) 
        : IRequestHandler<GetAllCompaniesByUserIdRequest, GetAllCompaniesByUserIdResponse>
    {
        private readonly ICompanyService _companyService = companyService;
        private readonly IMapper _mapper = mapper;

        public async Task<GetAllCompaniesByUserIdResponse> Handle(GetAllCompaniesByUserIdRequest request, CancellationToken cancellationToken)
        {
            var companies = await _companyService.GetCompanyListByUserId(request.UserId, cancellationToken);

            var companyDtos = _mapper.Map<IEnumerable<CompanyDto>>(companies);

            return new GetAllCompaniesByUserIdResponse(companyDtos);
        }
    }
}
