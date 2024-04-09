using InfoTrack.Domain.Entities;
using InfoTrack.Domain.Repositories.Interfaces;
using InfoTrack.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace InfoTrack.Infrastructure.Repositories
{
    public class CompanyRepository(IInfoTrackDbContext context) 
        : Repository<Company>(context), ICompanyRepository
    {
        public async Task<Company?> GetByNameAsync(string name, CancellationToken cancellationToken)
        {
             return await _context.Companies
                .FirstOrDefaultAsync(company => company.Name == name, cancellationToken);
        }

        //TODO: review this once data is done
        public async Task<IEnumerable<Company?>> GetListByUserIdAsync(int userId, CancellationToken cancellationToken)
        {
            List<int> companyIds = await _context.UserCompanies.Where(uc => uc.UserId == userId).Include(uc => uc.Company).Select(uc => uc.Id).ToListAsync(cancellationToken);

            var companies = await _context.Companies.Where(c => companyIds.Contains(c.Id)).ToListAsync(cancellationToken);
            //var results = await _context.UserCompanies.Where(uc => uc.UserId == userId).Include(uc => uc.Company).SelectMany<UserCompany,Company?>(uc => uc.Company);
            //var results = await _context.UserCompanies
            //    .Where(uc => uc.UserId == userId)
            //    .Include(uc => uc.Company)
            //    .Select(uc => uc.Company)
            //    .Distinct()
            //    .ToListAsync(cancellationToken);
            //    
            //var caseShipments = shipmentAppeals.SelectMany(repository => repository)
            //    .Join(Repository.Shipments, appeal => appeal.ShipmentID
            //        , shipment => shipment.ID, (appeal, shipment) => shipment);

            //var results = await _context.UserCompanies.SelectMany(uc => uc)
            //    .Join(_context.Companies, c => c.CompanyIds)

            //var result = _context.UserCompanies
            //    .Join(_context.Companies,
            //            uc => uc.UserId,
            //            c => c.Property2,
            //            (uc, c) => new
            //            {

            //                //SomeClass = sc,
            //                //SomeOtherClass = soc
            //            });
            return companies ?? Enumerable.Empty<Company?>();
        }

        //TODO
        public Task<Company> PatchAsync(Company company, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }
    }
}
