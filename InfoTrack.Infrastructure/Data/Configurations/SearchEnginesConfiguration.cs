using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using InfoTrack.Domain.Entities;

namespace InfoTrack.Infrastructure.Data.Configurations
{
    public class SearchEnginesConfiguration : IEntityTypeConfiguration<SearchEngines>
    {
        public void Configure(EntityTypeBuilder<SearchEngines> builder)
        {
            builder.HasKey(se => se.Id);

            builder.Property(se => se.Name)
                   .IsRequired()
                   .HasMaxLength(100);

            builder.Property(c => c.BaseUrl)
               .HasMaxLength(255)
               .IsRequired()
               .HasAnnotation("Url", true); // Note: EF Core doesn't directly support [Url], so we use HasAnnotation as a hint for future reference or custom validations

            builder.Property(c => c.Description)
               .HasMaxLength(255);
        }
    }
}
