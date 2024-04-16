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
        /// #DevNote: Not Used, but it was a time issue as I was intending on trying to allow 2 different profile types.
        /// A standard user and then more of an admin user (that logged in more as a company and could set preferences).
        /// </summary>
        DbSet<UserCompany> UserCompanies { get; }
        DbSet<UserCompanyRelationship> UserCompanyRelationships { get; }
        DbSet<Query> Queries { get; }
        DbSet<SearchResults> SearchResults { get; }
        DbSet<SearchResultItem> SearchResultItems { get; }
        DbSet<SearchResultType> SearchResultTypes { get; }
        public DbSet<SearchEngines> SearchEngines { get; set; }

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
