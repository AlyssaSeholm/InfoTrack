using AutoMapper;
using InfoTrack.Application.DTOs;
using InfoTrack.Infrastructure.Data;
using MediatR;
using Microsoft.EntityFrameworkCore;

//Todo - delete? is this even used?
namespace InfoTrack.Application.Mediatr.Queries
{
    public record GetCompaniesListRequest : IRequest<GetCompaniesListResponse>;

    public record GetCompaniesListResponse(List<CompanyDto> Companies);

    public class GetCompaniesListHandler(IInfoTrackDbContext context, IMapper mapper) : IRequestHandler<GetCompaniesListRequest, GetCompaniesListResponse>
    {
        private readonly IInfoTrackDbContext _context = context;
        private readonly IMapper _mapper = mapper;

        public async Task<GetCompaniesListResponse> Handle(GetCompaniesListRequest request, CancellationToken cancellationToken)
        {            
            //TODO: Add back 'AsNoTracking()'
            var companies = await _context.Companies.ToListAsync(cancellationToken); ////var companies = await _context.Companies.AsNoTracking().ToListAsync(cancellationToken);
            var response = new GetCompaniesListResponse(_mapper.Map<List<CompanyDto>>(companies));

            return response;
        }
    }
}
