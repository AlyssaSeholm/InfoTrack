using Microsoft.EntityFrameworkCore.ChangeTracking;
using InfoTrack.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace InfoTrack.Infrastructure.Data
{
    public interface IInfoTrackDbContext
    {
        DbSet<User> Users { get; }
        DbSet<Company> Companies { get; }
        /// <summary>
        /// Not Used, but it was a time issue as I didn't have the time/capacity to rely on having company profiles and user profiles.
        /// </summary>
        DbSet<UserCompany> UserCompanies { get; }
        DbSet<UserCompanyRelationship> UserCompanyRelationships { get; }
        DbSet<Query> Queries { get; }
        DbSet<SearchResults> SearchResults { get; }
        DbSet<SearchResultItem> SearchResultItems { get; }
        DbSet<SearchResultType> SearchResultTypes { get; }
        public DbSet<SearchEngines> SearchEngines { get; set; }

        //EntityEntry Add(object entity);
        //EntityEntry Remove(object entity);
        //EntityEntry Add<T>(object entity);
        //EntityEntry Remove<T>(object entity);
        //ValueTask<TEntity> FindAsync<TEntity>(params object[] keyValues) where TEntity : class;
        DbSet<TEntity> Set<TEntity>() where TEntity : class;
        ChangeTracker ChangeTracker { get; }
        Task<int> SaveChangesAsync(CancellationToken cancellationToken);

        IInfoTrackDbContext AsNoTracking();
        Task<T?> GetByIdAsync<T>(int id) where T : class;
        Task<T> AddAsync<T>(T entity) where T : class;
        Task UpdateAsync<T>(T entity) where T : class;
        Task RemoveAsync<T>(T entity) where T : class;
    }
}
