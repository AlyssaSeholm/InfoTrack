using InfoTrack.Domain.Repositories.Interfaces;
using InfoTrack.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

//TODO
namespace InfoTrack.Infrastructure.Repositories
{
    public class Repository<T>(IInfoTrackDbContext context) 
        : IRepository<T> where T : class
    {
        protected readonly IInfoTrackDbContext _context = context;

        async Task<T> IRepository<T>.AddAsync(T entity, CancellationToken cancellationToken)
        {
            await _context.AddAsync(entity);

            await _context.SaveChangesAsync(cancellationToken);

            return entity;
        }

        async Task IRepository<T>.DeleteAsync(T entity, CancellationToken cancellationToken)
        {
            await _context.RemoveAsync(entity);

            await _context.SaveChangesAsync(cancellationToken);

            return;
        }

        async Task<IEnumerable<T>> IRepository<T>.GetAllAsync(CancellationToken cancellationToken)
        {
            return await _context.Set<T>().ToListAsync(cancellationToken);
        }

        async Task<T?> IRepository<T>.GetByIdAsync(int id, CancellationToken cancellationToken)
        {
            return await _context.Set<T>().FindAsync([id], cancellationToken);
        }

        async Task IRepository<T>.UpdateAsync(T entity, CancellationToken cancellationToken)
        {
            _context.Set<T>().Update(entity);
            await _context.SaveChangesAsync(cancellationToken);
        }
    }
}
