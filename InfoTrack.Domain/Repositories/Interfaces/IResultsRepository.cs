using InfoTrack.Domain.Entities;

namespace InfoTrack.Domain.Repositories.Interfaces
{
    public interface IResultsRepository : IRepository<SearchResults>
    {
        Task<User> GetByEmailAsync(string email);
    }
}
