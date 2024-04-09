using InfoTrack.Domain.Entities;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;

namespace InfoTrack.Infrastructure.Data.Configurations
{
    public class SearchResultTypeConfiguration : IEntityTypeConfiguration<SearchResultType>
    {
        public void Configure(EntityTypeBuilder<SearchResultType> builder)
        {
            builder.HasKey(srt => srt.Id);

            builder.Property(srt => srt.Name)
                   .IsRequired()
                   .HasMaxLength(100);

            builder.Property(srt => srt.Description)
                   .HasMaxLength(255);
        }
    }
}
