using InfoTrack.Domain.Entities;
using InfoTrack.Domain.Repositories.Interfaces;
using InfoTrack.Domain.Services.Interfaces;

namespace InfoTrack.Domain.Services
{
    public class CompanyService(ICompanyRepository CompanyRepository) : ICompanyService
    {
        private readonly ICompanyRepository _CompanyRepository = CompanyRepository;


        public async Task<Company?> GetCompanyById(int companyId, CancellationToken cancellationToken)
        {
            return await _CompanyRepository.GetByIdAsync(companyId, cancellationToken);
        }
        public async Task<Company?> GetCompanyById(string companyId, CancellationToken cancellationToken)
        {
            bool isValidInt = int.TryParse(companyId, out int result);
            
            if (!isValidInt) { return null; }

            return await GetCompanyById(result, cancellationToken);
        }
        public async Task<Company?> GetCompanyByName(string name, CancellationToken cancellationToken)
        {
            return await _CompanyRepository.GetByNameAsync(name, cancellationToken);
        }

        public async Task<IEnumerable<Company?>> GetCompanyList(CancellationToken cancellationToken)
        {
            return await _CompanyRepository.GetAllAsync(cancellationToken);
        }
        public async Task<IEnumerable<Company?>> GetCompanyListByUserId(int userId, CancellationToken cancellationToken)
        {
            return await _CompanyRepository.GetListByUserIdAsync(userId, cancellationToken);
        }
        public async Task<IEnumerable<Company?>> GetCompanyListByUserId(string userId, CancellationToken cancellationToken)
        {
            bool isValidInt = int.TryParse(userId, out int result);

            if (!isValidInt) { return []; }

            return await GetCompanyListByUserId(result, cancellationToken);
        }


        public async Task<Company> CreateCompany(Company company, CancellationToken cancellationToken)
        {
            return await _CompanyRepository.AddAsync(company, cancellationToken);
        }
        public async Task<Company> UpdateCompany(Company company, CancellationToken cancellationToken)
        {
            await _CompanyRepository.UpdateAsync(company, cancellationToken);
            return company;
        }
        //public async Task<Company> PatchCompany(string fieldName, string newValue, CancellationToken cancellationToken)
        //{
        //    var fieldNames = await _CompanyRepository.GetFieldList();

        //    //TODO
        //    throw new NotImplementedException();
        //}
        public async Task<Company> PatchCompany(Company company, CancellationToken cancellationToken)
        {
            // Patch logic might involve specific property updates
            // Implement based on your patching strategy
            // Example: Update only non-null fields of 'company'
            return await _CompanyRepository.PatchAsync(company, cancellationToken);
        }

        /// <summary>
        /// Returned value will be empty if no company was deleted
        /// </summary>
        /// <param name="id"></param>
        /// <param name="cancellationToken"></param>
        /// <returns>Will be empty if no company was deleted</returns>
        public async Task<string> DeleteCompanyById(int id, CancellationToken cancellationToken)
        {
            var company = await _CompanyRepository.GetByIdAsync(id, cancellationToken);
            if (company != null)
            {
                var companyName = company.Name;
                await _CompanyRepository.DeleteAsync(company, cancellationToken);
                return companyName;
            }
            return string.Empty;
        }
    }
}
