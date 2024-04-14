using AutoMapper;
using InfoTrack.Application.DTOs;
using InfoTrack.Infrastructure.Data;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace InfoTrack.Application.Queries
{
    public record GetCompaniesRequest : IRequest<GetCompaniesResponse>;

    public record GetCompaniesResponse(List<CompanyDto> Companies);

    public class GetCompaniesHandler(IInfoTrackDbContext context, IMapper mapper) 
        : IRequestHandler<GetCompaniesRequest, GetCompaniesResponse>
    {
        private readonly IInfoTrackDbContext _context = context;
        private readonly IMapper _mapper = mapper;

        public async Task<GetCompaniesResponse> Handle(GetCompaniesRequest request, CancellationToken cancellationToken)
        {
            //-----------------TODO:------------------
            //   Add Automapper for Entity to DTOs
            //-----------------TODO:------------------
            //return new(await _context.AsNoTracking().Companies.Select(x => x.ToDto()).ToListAsync(cancellationToken));
            var companies = await _context.Companies.AsNoTracking().ToListAsync(cancellationToken);

            var response = new GetCompaniesResponse(_mapper.Map<List<CompanyDto>>(companies));

            return response;
        }
    }
}
