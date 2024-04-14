using AutoMapper;
using InfoTrack.Application.Models;
using InfoTrack.Application.Queries;
using InfoTrack.Infrastructure.Data;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InfoTrack.Application.Commands
{
    public record CreateCompanyRequest(Guid UserId, string CompanyName, string WebsiteUrl, DateTime CreatedOn) : IRequest<CreateCompanyResponse>;

    public record CreateCompanyResponse(CompanyDto Company);

    public class CreateCompanyHandler : IRequestHandler<CreateCompanyRequest, CreateCompanyResponse>
    {
        private readonly IInfoTrackDbContext _context;
        private readonly IMapper _mapper;

        public CreateCompanyHandler(IInfoTrackDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<CreateCompanyResponse> Handle(CreateCompanyRequest request, CancellationToken cancellationToken)
        {
            Company company = new (request.UserId, request.CompanyName, request.WebsiteUrl, request.CreatedOn);

            company.EnsureCompanyNameAvailability(_context);

            _context.Add(company);

            await _context.SaveChangesAsync(cancellationToken);

            //-----------------TODO:------------------
            //   Add Automapper for Entity to DTOs
            //-----------------TODO:------------------
            //return new(company.ToDto());
            return new CreateCompanyResponse(_mapper.Map<CompanyDto>(company));
        }
    }

    //public class CreateCompany : IRequest<int>
    //{
    //    public required string Name { get; set; }
    //    public required string WebsiteUrl { get; set; }
    //    // Additional properties...
    //}
}
