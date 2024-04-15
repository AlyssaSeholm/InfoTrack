using InfoTrack.Domain.Repositories.Interfaces;
using InfoTrack.Infrastructure.Data;
using InfoTrack.Infrastructure.Repositories;
using Microsoft.EntityFrameworkCore;

namespace InfoTrack.Domain.Entities.Repositories
{
    public class CompanyRepository(IInfoTrackDbContext context) 
        : Repository<Company>(context), ICompanyRepository
    {
        public async Task<Company?> GetByNameAsync(string name, CancellationToken cancellationToken)
        {
             return await _context.Companies
                .FirstOrDefaultAsync(company => company.Name == name, cancellationToken);
        }

        public async Task<IEnumerable<Company?>> GetListByUserIdAsync(int userId, CancellationToken cancellationToken)
        {
            List<int> companyIds = await _context.UserCompanies.Where(uc => uc.UserId == userId).Include(uc => uc.Company).Select(uc => uc.Id).ToListAsync(cancellationToken);

            var companies = await _context.Companies.Where(c => companyIds.Contains(c.Id)).ToListAsync(cancellationToken);

            return companies ?? Enumerable.Empty<Company?>();
        }

        /// <summary>
        /// #DevNote: Would like to add this.
        /// </summary>
        /// <param name="company"></param>
        /// <param name="cancellationToken"></param>
        /// <returns></returns>
        /// <exception cref="NotImplementedException"></exception>
        public Task<Company> PatchAsync(Company company, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }
    }
}
