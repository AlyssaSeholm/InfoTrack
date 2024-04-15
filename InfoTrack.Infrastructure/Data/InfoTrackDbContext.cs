using InfoTrack.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;

namespace InfoTrack.Infrastructure.Data
{
    public class InfoTrackDbContext(DbContextOptions<InfoTrackDbContext> options) 
        : DbContext(options), IInfoTrackDbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Company> Companies { get; set; }

        /// <summary>
        /// #DevNote: Not Used, but it was a time issue as I was intending on trying to allow 2 different profile types.
        /// A standard user and then more of an admin user (that logged in more as a company and could set preferences).
        /// </summary>
        public DbSet<UserCompany> UserCompanies { get; set; }
        public DbSet<UserCompanyRelationship> UserCompanyRelationships { get; set; }
        public DbSet<Query> Queries { get; set; }
        public DbSet<SearchResults> SearchResults { get; set; }
        public DbSet<SearchResultItem> SearchResultItems { get; set; }
        public DbSet<SearchResultType> SearchResultTypes { get; set; }
        public DbSet<SearchEngines> SearchEngines { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // This will automatically apply all IEntityTypeConfiguration instances within the assembly
            modelBuilder.ApplyConfigurationsFromAssembly(typeof(InfoTrackDbContext).Assembly);

            SeedData.SetupSeedData(modelBuilder);
        }

        public IInfoTrackDbContext AsNoTracking()
        {
            ChangeTracker.QueryTrackingBehavior = QueryTrackingBehavior.NoTracking;

            return this;
        }

        public async Task<T> AddAsync<T>(T entity) where T : class
        {
            var set = Set<T>();

            var entry = await set.AddAsync(entity);

            await SaveChangesAsync();

            return entry.Entity;
        }

        public async Task RemoveAsync<T>(T entity) where T : class
        {
            var set = Set<T>();

            set.Remove(entity);

            await SaveChangesAsync();

            return;
        }

        public async Task UpdateAsync<T>(T entity) where T : class
        {
            Set<T>().Update(entity);
            await SaveChangesAsync();
        }

        public async Task<T?> GetByIdAsync<T>(int id) where T : class
        {
            return await Set<T>().FindAsync(id);
        }
    }
}
