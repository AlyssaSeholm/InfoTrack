using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using InfoTrack.Domain.Entities;

namespace InfoTrack.Infrastructure.Data.Configurations
{
    public class SearchResultsConfiguration : IEntityTypeConfiguration<SearchResults>
    {
        public void Configure(EntityTypeBuilder<SearchResults> builder)
        {
            builder.HasKey(sr => sr.Id);

            builder.HasOne(sr => sr.Query)
                   .WithMany()
                   .HasForeignKey(sr => sr.QueryId)
                   .OnDelete(DeleteBehavior.Restrict);

            builder.Property(sr => sr.HighestRank)
                   .HasDefaultValue(0)
                   .IsRequired();

            builder.Property(sr => sr.Top100Count)
                   .HasDefaultValue(0)
                   .IsRequired();

            builder.Property(sr => sr.SearchedOn)
                   .HasDefaultValue(DateTime.UtcNow)
                   .IsRequired();

            builder.Property(sr => sr.ResultTypeCode)
                   .HasDefaultValue("Seed")
                   .IsRequired();

        }
    }
}
