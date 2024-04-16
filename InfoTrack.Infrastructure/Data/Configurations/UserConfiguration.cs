using InfoTrack.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace InfoTrack.Infrastructure.Data.Configurations
{
    public class UserConfiguration : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> builder)
        {
            builder.HasKey(u => u.Id);

            builder.Property(u => u.Email)
                   .IsRequired()
                   .HasMaxLength(255)
                   .HasAnnotation("EmailAddress", true); // Note: EF Core doesn't directly support [EmailAddress], so we use HasAnnotation as a hint for future reference or custom validations

            builder.Property(u => u.FirstName)
                   .IsRequired()
                   .HasMaxLength(100);

            builder.Property(u => u.LastName)
                   .IsRequired()
                   .HasMaxLength(100);

            builder.Property(u => u.SelectedTheme)
                   .HasMaxLength(100);

            builder.Property(u => u.Title)
                   .HasMaxLength(100);

            builder.Property(u => u.City)
                   .HasMaxLength(100);

            builder.Property(u => u.State)
                   .HasMaxLength(50);

            builder.Property(u => u.About)
                   .HasMaxLength(500);

            builder.Property(u => u.Language)
                   .HasMaxLength(100);

            builder.Property(u => u.Timezone)
                   .HasMaxLength(25);

            builder.Property(u => u.CreatedOn)
                   .IsRequired()
                   .HasDefaultValue(DateTime.UtcNow);

            builder.Property(u => u.LastModifiedOn)
                   .IsRequired()
                   .HasDefaultValue(DateTime.UtcNow);
        }
    }
}
