using Microsoft.EntityFrameworkCore;
using InfoTrack.Domain.Entities;

namespace InfoTrack.Infrastructure.Data
{
    public static class SeedData
    {
        public static void SetupSeedData(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>()
                .HasData(
                    new User { Id = 1, Email = "Lys.Seholm@Gmail.com", FirstName = "Alyssa", LastName = "Seholm", CreatedOn = DateTime.UtcNow, LastModifiedOn = DateTime.UtcNow, SelectedTheme = null },
                    new User { Id = 2, Email = "Batman@DefinitelyNotBruceWayne.com", FirstName = "Bruce", LastName = "Wayne", CreatedOn = DateTime.UtcNow, LastModifiedOn = DateTime.UtcNow, SelectedTheme = null }
                );

            modelBuilder.Entity<Company>()
                .HasData(
                    new Company { Id = 1, UserId = 1, PrimaryCompanyId = null, RelationshipType = "Primary", Name = "InfoTrack", IncludeTerms = ["efiling", "integration"], BaseUrl = "https://www.infotrack.com/", CreatedOn = DateTime.UtcNow },
                    new Company { Id = 2, UserId = 1, PrimaryCompanyId = 1, RelationshipType = "Sister", Name = "Cats R' Us", IncludeTerms = ["unlimited", "food"], BaseUrl = "https://catsrusrescue.org/", CreatedOn = DateTime.UtcNow },
                    new Company { Id = 3, UserId = 1, PrimaryCompanyId = 1, RelationshipType = "Competitor", Name = "Wayne Enterprises", IncludeTerms = ["batman", "unmasked"], BaseUrl = "https://batman.fandom.com/", CreatedOn = DateTime.UtcNow },
                    new Company { Id = 4, UserId = 2, PrimaryCompanyId = null, RelationshipType = "Primary", Name = "Dogs R' Us", IncludeTerms = ["happy", "humans"], BaseUrl = "https://www.dogsrustitusville.com/", CreatedOn = DateTime.UtcNow },
                    new Company { Id = 5, UserId = 2, PrimaryCompanyId = 4, RelationshipType = "Competitor", Name = "The Daily Planet", IncludeTerms = ["superman", "lois"], BaseUrl = "https://dailyplanetdc.com/planet-profiles/", CreatedOn = DateTime.UtcNow },
                    new Company { Id = 6, UserId = 1, PrimaryCompanyId = 1, RelationshipType = "Parent", Name = "Clio", IncludeTerms = ["efiling"], BaseUrl = "https://www.clio.com/", CreatedOn = DateTime.UtcNow }
                );

            modelBuilder.Entity<UserCompany>()
                .HasData(
                    new UserCompany { Id = 1, UserId = 1, CompanyId = 1, PrimaryCompanyId = null, RelationshipType = "Primary", KeyTerms = "", DateCreated = DateTime.UtcNow, DateRemoved = null },         // Alyssa - InfoTrack
                    new UserCompany { Id = 2, UserId = 1, CompanyId = 2, PrimaryCompanyId = 1, RelationshipType = "Sister", KeyTerms = "cats", DateCreated = DateTime.UtcNow, DateRemoved = null },         // Alyssa - CatsRUs
                    new UserCompany { Id = 3, UserId = 1, CompanyId = 4, PrimaryCompanyId = 1, RelationshipType = "Competitor", KeyTerms = "dogs", DateCreated = DateTime.UtcNow, DateRemoved = null },     // Alyssa - DogsRUs
                    new UserCompany { Id = 4, UserId = 2, CompanyId = 3, PrimaryCompanyId = null, RelationshipType = "Primary", KeyTerms = "batman", DateCreated = DateTime.UtcNow, DateRemoved = null },   // Bruce - WayneEnterprises
                    new UserCompany { Id = 5, UserId = 2, CompanyId = 5, PrimaryCompanyId = 4, RelationshipType = "Competitor", KeyTerms = "superman, lois", DateCreated = DateTime.UtcNow, DateRemoved = null },  // Bruce - DailyPlanet
                    new UserCompany { Id = 6, UserId = 1, CompanyId = 5, PrimaryCompanyId = 1, RelationshipType = "Parent", KeyTerms = "", DateCreated = DateTime.UtcNow, DateRemoved = null }              // Alyssa - Clio
                );

            modelBuilder.Entity<UserCompanyRelationship>()
                .HasData(
                    new UserCompanyRelationship { Id = 1, Description = "Main Company Profile", Name = "Primary" },
                    new UserCompanyRelationship { Id = 2, Description = "Competitor to compare against.", Name = "Competitor" },
                    new UserCompanyRelationship { Id = 3, Description = "Sister Company", Name = "Related" },
                    new UserCompanyRelationship { Id = 4, Description = "Parent/Controller Company", Name = "Parent" }
                );

            modelBuilder.Entity<SearchResultType>()
                .HasData(
                    new SearchResultType { Id = 1, Description = "Generated with DB creation", Name = "Seed" },
                    new SearchResultType { Id = 2, Description = "Direct link to site", Name = "Direct" },
                    new SearchResultType { Id = 3, Description = "Related company link", Name = "Related" },
                    new SearchResultType { Id = 4, Description = "Mentioned or Referenced", Name = "Mentioned" }
                );

            modelBuilder.Entity<SearchEngines>()
                .HasData(
                    new SearchEngines { Id = 1, Name = "Google", BaseUrl = "https://www.google.com/search?num=###&q=", Description = "Always returns 100 results (if possible)" },
                    new SearchEngines { Id = 2, Name = "Jedi", BaseUrl = "https://www.jedi.com/search?num=###&q=", Description = "These are not the droids you are looking for..." }
                );
        }
    }
}
