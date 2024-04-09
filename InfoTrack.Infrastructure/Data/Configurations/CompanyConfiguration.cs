using InfoTrack.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace InfoTrack.Infrastructure.Data.Configurations
{
    public class CompanyConfiguration : IEntityTypeConfiguration<Company>
    {
        public void Configure(EntityTypeBuilder<Company> builder)
        {
            builder.HasKey(c => c.Id);

            builder.HasOne(uc => uc.User)
                   .WithMany()//u => u.UserCompanies)
                   .HasForeignKey(uc => uc.UserId)
                   .IsRequired()
                   .OnDelete(DeleteBehavior.Restrict);

            builder.HasOne(uc => uc.PrimaryParentCompany)
                   .WithMany()//c => c.UserCompanies)
                   .HasForeignKey(uc => uc.PrimaryCompanyId)
                   .IsRequired(false)
                   .OnDelete(DeleteBehavior.Restrict);

            builder.Property(c => c.RelationshipType)
                .HasMaxLength(100);


            builder.Property(c => c.Name)
                .IsRequired()
                .HasMaxLength(255);

            builder.Property(c => c.BaseUrl)
                .HasMaxLength(255)
                .HasAnnotation("Url", true); // Note: EF Core doesn't directly support [Url], so we use HasAnnotation as a hint for future reference or custom validations

            builder.Property(c => c.CreatedOn)
                .HasDefaultValue(DateTime.UtcNow)
                .IsRequired();

            builder.Property(u => u.IncludeTerms)
                .IsRequired()
                .HasMaxLength(255);
        }
    }
}
