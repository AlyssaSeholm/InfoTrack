using InfoTrack.Domain.Entities;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;

namespace InfoTrack.Infrastructure.Data.Configurations
{
    public class QueryConfiguration : IEntityTypeConfiguration<Query>
    {
        public void Configure(EntityTypeBuilder<Query> builder)
        {
            builder.HasKey(q => q.Id);

            builder.HasOne(q => q.User)
                .WithMany() 
                .HasForeignKey(q => q.UserId)
                .OnDelete(DeleteBehavior.Restrict);

            builder.HasOne(q => q.MyCompany)
                .WithMany()
                .HasForeignKey(q => q.MyCompanyId)
                .OnDelete(DeleteBehavior.Restrict);

            builder.HasOne(q => q.CompetitorCompany)
                .WithMany()
                .HasForeignKey(q => q.CompetitorCompanyId)
                .OnDelete(DeleteBehavior.Restrict);

            builder.HasOne(q => q.Engine)
                .WithMany()
                .HasForeignKey(q => q.SearchEngineId)
                .OnDelete(DeleteBehavior.Restrict);

            builder.Property(c => c.NumberOfResultsPulled)
                .HasDefaultValue(100);

            builder.Property(q => q.IncludeTerms)
                .HasMaxLength(255)
                .IsRequired();

            builder.Property(q => q.Name)
                .HasMaxLength(255)
                .IsRequired();

            builder.Property(q => q.ExcludeTerms)
                .HasMaxLength(255);

            builder.Property(q => q.DateCreated)
                .HasDefaultValue(DateTime.UtcNow)
                .IsRequired();
        }
    }
}
