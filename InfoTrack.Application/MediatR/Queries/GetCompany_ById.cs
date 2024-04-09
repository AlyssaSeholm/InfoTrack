using AutoMapper;
using InfoTrack.Application.Common;
using InfoTrack.Application.DTOs;
using InfoTrack.Domain.Services.Interfaces;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace InfoTrack.Application.Mediatr.Queries
{
    //public record GetCompanyByIdRequest(string Id) : IRequest<GetCompanyByIdResponse>;
    public class GetCompanyByIdRequest : IRequest<GetCompanyByIdResponse>
    {
        [FromRoute]
        public required string Id { get; set; }
    }

    public record GetCompanyByIdResponse(CompanyDto Company);

    public class GetCompanyByIdHandler(ICompanyService companyService, IMapper mapper) : IRequestHandler<GetCompanyByIdRequest, GetCompanyByIdResponse>
    {
        private readonly ICompanyService _companyService = companyService;
        private readonly IMapper _mapper = mapper;

        public async Task<GetCompanyByIdResponse> Handle(GetCompanyByIdRequest request, CancellationToken cancellationToken)
        {
            if (!Int32.TryParse(request.Id, out int id))
            {
                return new GetCompanyByIdResponse(CompanyDto.CreateEmptyWithMessage(ResponseMessages.StatusType.Conversion_To_Int));
            }

            var company = await _companyService.GetCompanyById(id, cancellationToken);

            if (company == null)
            {
                return new GetCompanyByIdResponse(CompanyDto.CreateEmptyWithMessage(ResponseMessages.StatusType.NotFound));
            }

            var response = new GetCompanyByIdResponse(_mapper.Map<CompanyDto>(company));

            return response;
        }
    }
}
