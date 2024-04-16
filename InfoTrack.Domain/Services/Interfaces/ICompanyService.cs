using InfoTrack.Domain.Entities;

namespace InfoTrack.Domain.Entities.Services.Interfaces
{
    public  interface ICompanyService
    {
        Task<Company?> GetCompanyById(int companyId, CancellationToken cancellationToken);
        Task<Company?> GetCompanyByName(string email, CancellationToken cancellationToken);

        Task<IEnumerable<Company?>> GetCompanyList(CancellationToken cancellationToken);
        Task<IEnumerable<Company?>> GetCompanyListByUserId(int userId, CancellationToken cancellationToken);
        Task<IEnumerable<Company?>> GetCompanyListByUserId(string userId, CancellationToken cancellationToken);

        Task<Company> CreateCompany(Company company, CancellationToken cancellationToken);
        Task<Company> UpdateCompany(Company company, CancellationToken cancellationToken);
        Task<Company> PatchCompany(Company company, CancellationToken cancellationToken);
        Task<string> DeleteCompanyById(int id,  CancellationToken cancellationToken);
    }
}
