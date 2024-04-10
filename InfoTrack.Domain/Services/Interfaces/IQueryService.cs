using InfoTrack.Domain.Entities;

namespace InfoTrack.Domain.Services.Interfaces
{
    public interface IQueryService
    {
        Task<Query?> GetQueryById(int queryId, CancellationToken cancellationToken);
        Task<Query> CreateQuery(Query query, CancellationToken cancellationToken);
        Task<Query> UpdateQuery(Query query, CancellationToken cancellationToken);
        Task<Query> PatchQuery(Query query, CancellationToken cancellationToken);
        Task<string> DeleteQueryById(int id, CancellationToken cancellationToken);

    }
}
