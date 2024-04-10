using InfoTrack.Domain.Entities;
using InfoTrack.Domain.Repositories.Interfaces;
using InfoTrack.Infrastructure.Data;

namespace InfoTrack.Infrastructure.Repositories
{
    public class QueryRepository(IInfoTrackDbContext context)
        : Repository<Query>(context), IQueryRepository
    {

    }
}
