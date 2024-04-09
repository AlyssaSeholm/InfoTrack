using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using InfoTrack.Domain.Entities;

namespace InfoTrack.Infrastructure.Data.Configurations
{
    public class UserCompanyConfiguration : IEntityTypeConfiguration<UserCompany>
    {
        public void Configure(EntityTypeBuilder<UserCompany> builder)
        {
            builder.HasKey(uc => new { uc.UserId, uc.CompanyId });

            builder.HasOne(uc => uc.User)
                   .WithMany()//u => u.UserCompanies)
                   .HasForeignKey(uc => uc.UserId)
                   .IsRequired()
                   .OnDelete(DeleteBehavior.Restrict);

            builder.HasOne(uc => uc.Company)
                   .WithMany()//c => c.UserCompanies)
                   .HasForeignKey(uc => uc.CompanyId)
                   .IsRequired()
                   .OnDelete(DeleteBehavior.Restrict);

            builder.HasOne(uc => uc.PrimaryParentCompany)
                   .WithMany()//c => c.UserCompanies)
                   .HasForeignKey(uc => uc.PrimaryCompanyId)
                   .OnDelete(DeleteBehavior.Restrict);            

            builder.Property(c => c.DateCreated)
                .HasDefaultValue(DateTime.UtcNow)
                .IsRequired();

            builder.Property(c => c.RelationshipType)
                .HasMaxLength(100);

            builder.Property(c => c.KeyTerms)
                .HasMaxLength(255);

        }
    }
}
