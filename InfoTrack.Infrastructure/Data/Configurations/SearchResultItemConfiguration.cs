using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using InfoTrack.Domain.Entities;

namespace InfoTrack.Infrastructure.Data.Configurations
{
    public class SearchResultItemConfiguration : IEntityTypeConfiguration<SearchResultItem>
    {
        public void Configure(EntityTypeBuilder<SearchResultItem> builder)
        {
            builder.HasKey(sri => sri.Id);

            builder.HasOne(sri => sri.Results)
                .WithMany(sri => sri.Items)
                .HasForeignKey(sri => sri.SearchResultsId)
                .OnDelete(DeleteBehavior.Restrict);

            builder.Property(sri => sri.Url)
               .HasMaxLength(255)
               .IsRequired()
               .HasAnnotation("Url", true); // Note: EF Core doesn't directly support [Url], so we use HasAnnotation as a hint for future reference or custom validations

            builder.Property(sri => sri.ResultTypeName)
               .HasMaxLength(100)
               .IsRequired();

            builder.Property(sri => sri.Tags)
               .HasMaxLength(255);
        }
    }
}
