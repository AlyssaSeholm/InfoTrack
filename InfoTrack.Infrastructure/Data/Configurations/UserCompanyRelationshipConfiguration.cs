using InfoTrack.Domain.Entities;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;

namespace InfoTrack.Infrastructure.Data.Configurations
{
    public class UserCompanyRelationshipConfiguration : IEntityTypeConfiguration<UserCompanyRelationship>
    {
        public void Configure(EntityTypeBuilder<UserCompanyRelationship> builder)
        {
            builder.HasKey(ucr => ucr.Id);

            builder.Property(t => t.Name)
                   .IsRequired()
                   .HasMaxLength(100);

            builder.Property(t => t.Description)
                   .IsRequired()
                   .HasMaxLength(255);
        }
    }
}
