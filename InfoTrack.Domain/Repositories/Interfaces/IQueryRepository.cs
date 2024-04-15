using InfoTrack.Domain.Entities;

namespace InfoTrack.Domain.Repositories.Interfaces
{
    public interface IQueryRepository : IRepository<Query>
    {
        Task<IEnumerable<Query?>> GetListByUserIdAsync(string userId, CancellationToken cancellationToken);
    }
}
