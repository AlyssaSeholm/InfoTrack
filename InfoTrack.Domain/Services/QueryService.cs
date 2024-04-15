using InfoTrack.Domain.Entities;
using InfoTrack.Domain.Repositories.Interfaces;
using InfoTrack.Domain.Services.Interfaces;

namespace InfoTrack.Domain.Services
{
    public class QueryService(IQueryRepository QueryRepository) : IQueryService
    {
        private readonly IQueryRepository _QueryRepository = QueryRepository;

        public async Task<Query> CreateQuery(Query query, CancellationToken cancellationToken)
        {
            return await _QueryRepository.AddAsync(query, cancellationToken);
        }

        public async Task<string> DeleteQueryById(int id, CancellationToken cancellationToken)
        {
            var query = await _QueryRepository.GetByIdAsync(id, cancellationToken);
            if (query != null)
            {
                var queryName = $"{query.Name}";
                await _QueryRepository.DeleteAsync(query, cancellationToken);
                return queryName;
            }
            return string.Empty;
        }

        public async Task<Query?> GetQueryById(int queryId, CancellationToken cancellationToken)
        {
            return await _QueryRepository.GetByIdAsync(queryId, cancellationToken);
        }

        public async Task<IEnumerable<Query?>> GetQueryListByUserId(string userId, CancellationToken cancellationToken)
        {
            return await _QueryRepository.GetListByUserIdAsync(userId, cancellationToken);
        }

        public async Task<Query> PatchQuery(Query query, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }

        public async Task<Query> UpdateQuery(Query query, CancellationToken cancellationToken)
        {
            await _QueryRepository.UpdateAsync(query, cancellationToken);
            return query;
        }
    }
}
