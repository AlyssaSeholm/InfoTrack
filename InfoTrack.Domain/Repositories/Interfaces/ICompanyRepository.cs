using InfoTrack.Domain.Entities;

namespace InfoTrack.Domain.Repositories.Interfaces
{
    public interface ICompanyRepository : IRepository<Company>
    {
        Task<Company?> GetByNameAsync(string name, CancellationToken cancellationToken);
        Task<IEnumerable<Company?>> GetListByUserIdAsync(int userId, CancellationToken cancellationToken);
        Task<Company> PatchAsync(Company company, CancellationToken cancellationToken);
    }
}
