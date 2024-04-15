﻿// <auto-generated />
using InfoTrack.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace InfoTrack.Domain.Entities.Migrations
{
    [DbContext(typeof(InfoTrackDbContext))]
    [Migration("20240414152042_InitialCreate")]
    partial class InitialCreate
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.3")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("InfoTrack.Domain.Entities.Company", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("BaseUrl")
                        .IsRequired()
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)")
                        .HasAnnotation("Url", true);

                    b.Property<DateTime>("CreatedOn")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("datetime2")
                        .HasDefaultValue(new DateTime(2024, 4, 14, 15, 20, 41, 792, DateTimeKind.Utc).AddTicks(3508));

                    b.Property<DateTime?>("DateRemoved")
                        .HasColumnType("datetime2");

                    b.Property<string>("IncludeTerms")
                        .IsRequired()
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.Property<int?>("PrimaryCompanyId")
                        .HasColumnType("int");

                    b.Property<string>("RelationshipType")
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.Property<int>("UserId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("PrimaryCompanyId");

                    b.HasIndex("UserId");

                    b.ToTable("Companies");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            BaseUrl = "https://www.infotrack.com/",
                            CreatedOn = new DateTime(2024, 4, 14, 15, 20, 41, 795, DateTimeKind.Utc).AddTicks(6253),
                            IncludeTerms = "[\"efiling\",\"integration\"]",
                            Name = "InfoTrack",
                            RelationshipType = "Primary",
                            UserId = 1
                        },
                        new
                        {
                            Id = 2,
                            BaseUrl = "https://catsrusrescue.org/",
                            CreatedOn = new DateTime(2024, 4, 14, 15, 20, 41, 795, DateTimeKind.Utc).AddTicks(6255),
                            IncludeTerms = "[\"unlimited\",\"food\"]",
                            Name = "Cats R' Us",
                            PrimaryCompanyId = 1,
                            RelationshipType = "Sister",
                            UserId = 1
                        },
                        new
                        {
                            Id = 3,
                            BaseUrl = "https://batman.fandom.com/",
                            CreatedOn = new DateTime(2024, 4, 14, 15, 20, 41, 795, DateTimeKind.Utc).AddTicks(6257),
                            IncludeTerms = "[\"batman\",\"unmasked\"]",
                            Name = "Wayne Enterprises",
                            PrimaryCompanyId = 1,
                            RelationshipType = "Competitor",
                            UserId = 1
                        },
                        new
                        {
                            Id = 4,
                            BaseUrl = "https://www.dogsrustitusville.com/",
                            CreatedOn = new DateTime(2024, 4, 14, 15, 20, 41, 795, DateTimeKind.Utc).AddTicks(6259),
                            IncludeTerms = "[\"happy\",\"humans\"]",
                            Name = "Dogs R' Us",
                            RelationshipType = "Primary",
                            UserId = 2
                        },
                        new
                        {
                            Id = 5,
                            BaseUrl = "https://dailyplanetdc.com/planet-profiles/",
                            CreatedOn = new DateTime(2024, 4, 14, 15, 20, 41, 795, DateTimeKind.Utc).AddTicks(6260),
                            IncludeTerms = "[\"superman\",\"lois\"]",
                            Name = "The Daily Planet",
                            PrimaryCompanyId = 4,
                            RelationshipType = "Competitor",
                            UserId = 2
                        },
                        new
                        {
                            Id = 6,
                            BaseUrl = "https://www.clio.com/",
                            CreatedOn = new DateTime(2024, 4, 14, 15, 20, 41, 795, DateTimeKind.Utc).AddTicks(6261),
                            IncludeTerms = "[\"efiling\"]",
                            Name = "Clio",
                            PrimaryCompanyId = 1,
                            RelationshipType = "Parent",
                            UserId = 1
                        });
                });

            modelBuilder.Entity("InfoTrack.Domain.Entities.Query", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<int?>("CompetitorCompanyId")
                        .HasColumnType("int");

                    b.Property<DateTime>("DateCreated")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("datetime2")
                        .HasDefaultValue(new DateTime(2024, 4, 14, 15, 20, 41, 793, DateTimeKind.Utc).AddTicks(21));

                    b.Property<DateTime?>("DateRemoved")
                        .HasColumnType("datetime2");

                    b.Property<string>("ExcludeTerms")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.Property<string>("IncludeTerms")
                        .IsRequired()
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.Property<int>("MyCompanyId")
                        .HasColumnType("int");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.Property<int?>("NumberOfResultsPulled")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasDefaultValue(100);

                    b.Property<int>("SearchEngineId")
                        .HasColumnType("int");

                    b.Property<int>("UserId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("CompetitorCompanyId");

                    b.HasIndex("MyCompanyId");

                    b.HasIndex("SearchEngineId");

                    b.HasIndex("UserId");

                    b.ToTable("Queries");
                });

            modelBuilder.Entity("InfoTrack.Domain.Entities.SearchEngines", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("BaseUrl")
                        .IsRequired()
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)")
                        .HasAnnotation("Url", true);

                    b.Property<string>("Description")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.HasKey("Id");

                    b.ToTable("SearchEngines");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            BaseUrl = "https://www.google.com/search?num=###&q=",
                            Description = "Always returns 100 results (if possible)",
                            Name = "Google"
                        },
                        new
                        {
                            Id = 2,
                            BaseUrl = "https://www.jedi.com/search?num=###&q=",
                            Description = "These are not the droids you are looking for...",
                            Name = "Jedi"
                        });
                });

            modelBuilder.Entity("InfoTrack.Domain.Entities.SearchResultItem", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("ResultTypeName")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.Property<int>("SearchResultsId")
                        .HasColumnType("int");

                    b.Property<string>("Tags")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.Property<string>("Url")
                        .IsRequired()
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)")
                        .HasAnnotation("Url", true);

                    b.HasKey("Id");

                    b.HasIndex("SearchResultsId");

                    b.ToTable("SearchResultItems");
                });

            modelBuilder.Entity("InfoTrack.Domain.Entities.SearchResultType", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.HasKey("Id");

                    b.ToTable("SearchResultTypes");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Description = "Generated with DB creation",
                            Name = "Seed"
                        },
                        new
                        {
                            Id = 2,
                            Description = "Direct link to site",
                            Name = "Direct"
                        },
                        new
                        {
                            Id = 3,
                            Description = "Related company link",
                            Name = "Related"
                        },
                        new
                        {
                            Id = 4,
                            Description = "Mentioned or Referenced",
                            Name = "Mentioned"
                        });
                });

            modelBuilder.Entity("InfoTrack.Domain.Entities.SearchResults", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<int>("HighestRank")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasDefaultValue(0);

                    b.Property<int>("QueryId")
                        .HasColumnType("int");

                    b.Property<int?>("QueryId1")
                        .HasColumnType("int");

                    b.Property<string>("ResultTypeCode")
                        .IsRequired()
                        .ValueGeneratedOnAdd()
                        .HasColumnType("nvarchar(max)")
                        .HasDefaultValue("Seed");

                    b.Property<DateTime>("SearchedOn")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("datetime2")
                        .HasDefaultValue(new DateTime(2024, 4, 14, 15, 20, 41, 794, DateTimeKind.Utc).AddTicks(654));

                    b.Property<int>("Top100Count")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasDefaultValue(0);

                    b.HasKey("Id");

                    b.HasIndex("QueryId");

                    b.HasIndex("QueryId1");

                    b.ToTable("SearchResults");
                });

            modelBuilder.Entity("InfoTrack.Domain.Entities.Tags", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.HasKey("Id");

                    b.ToTable("Tags");
                });

            modelBuilder.Entity("InfoTrack.Domain.Entities.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("About")
                        .HasMaxLength(500)
                        .HasColumnType("nvarchar(500)");

                    b.Property<string>("City")
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.Property<DateTime>("CreatedOn")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("datetime2")
                        .HasDefaultValue(new DateTime(2024, 4, 14, 15, 20, 41, 795, DateTimeKind.Utc).AddTicks(5643));

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)")
                        .HasAnnotation("EmailAddress", true);

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("Language")
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.Property<DateTime>("LastModifiedOn")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("datetime2")
                        .HasDefaultValue(new DateTime(2024, 4, 14, 15, 20, 41, 795, DateTimeKind.Utc).AddTicks(5887));

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("SelectedTheme")
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("State")
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("Timezone")
                        .HasMaxLength(25)
                        .HasColumnType("nvarchar(25)");

                    b.Property<string>("Title")
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.HasKey("Id");

                    b.ToTable("Users");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            CreatedOn = new DateTime(2024, 4, 14, 15, 20, 41, 795, DateTimeKind.Utc).AddTicks(6138),
                            Email = "Lys.Seholm@Gmail.com",
                            FirstName = "Alyssa",
                            LastModifiedOn = new DateTime(2024, 4, 14, 15, 20, 41, 795, DateTimeKind.Utc).AddTicks(6139),
                            LastName = "Seholm"
                        },
                        new
                        {
                            Id = 2,
                            CreatedOn = new DateTime(2024, 4, 14, 15, 20, 41, 795, DateTimeKind.Utc).AddTicks(6140),
                            Email = "Batman@DefinitelyNotBruceWayne.com",
                            FirstName = "Bruce",
                            LastModifiedOn = new DateTime(2024, 4, 14, 15, 20, 41, 795, DateTimeKind.Utc).AddTicks(6141),
                            LastName = "Wayne"
                        });
                });

            modelBuilder.Entity("InfoTrack.Domain.Entities.UserCompany", b =>
                {
                    b.Property<int>("UserId")
                        .HasColumnType("int");

                    b.Property<int>("CompanyId")
                        .HasColumnType("int");

                    b.Property<DateTime>("DateCreated")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("datetime2")
                        .HasDefaultValue(new DateTime(2024, 4, 14, 15, 20, 41, 795, DateTimeKind.Utc).AddTicks(2983));

                    b.Property<DateTime?>("DateRemoved")
                        .HasColumnType("datetime2");

                    b.Property<int>("Id")
                        .HasColumnType("int");

                    b.Property<string>("KeyTerms")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.Property<int?>("PrimaryCompanyId")
                        .HasColumnType("int");

                    b.Property<string>("RelationshipType")
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.HasKey("UserId", "CompanyId");

                    b.HasIndex("CompanyId");

                    b.HasIndex("PrimaryCompanyId");

                    b.ToTable("UserCompanies");

                    b.HasData(
                        new
                        {
                            UserId = 1,
                            CompanyId = 1,
                            DateCreated = new DateTime(2024, 4, 14, 15, 20, 41, 795, DateTimeKind.Utc).AddTicks(6290),
                            Id = 1,
                            KeyTerms = "",
                            RelationshipType = "Primary"
                        },
                        new
                        {
                            UserId = 1,
                            CompanyId = 2,
                            DateCreated = new DateTime(2024, 4, 14, 15, 20, 41, 795, DateTimeKind.Utc).AddTicks(6292),
                            Id = 2,
                            KeyTerms = "cats",
                            PrimaryCompanyId = 1,
                            RelationshipType = "Sister"
                        },
                        new
                        {
                            UserId = 1,
                            CompanyId = 4,
                            DateCreated = new DateTime(2024, 4, 14, 15, 20, 41, 795, DateTimeKind.Utc).AddTicks(6294),
                            Id = 3,
                            KeyTerms = "dogs",
                            PrimaryCompanyId = 1,
                            RelationshipType = "Competitor"
                        },
                        new
                        {
                            UserId = 2,
                            CompanyId = 3,
                            DateCreated = new DateTime(2024, 4, 14, 15, 20, 41, 795, DateTimeKind.Utc).AddTicks(6295),
                            Id = 4,
                            KeyTerms = "batman",
                            RelationshipType = "Primary"
                        },
                        new
                        {
                            UserId = 2,
                            CompanyId = 5,
                            DateCreated = new DateTime(2024, 4, 14, 15, 20, 41, 795, DateTimeKind.Utc).AddTicks(6296),
                            Id = 5,
                            KeyTerms = "superman, lois",
                            PrimaryCompanyId = 4,
                            RelationshipType = "Competitor"
                        },
                        new
                        {
                            UserId = 1,
                            CompanyId = 5,
                            DateCreated = new DateTime(2024, 4, 14, 15, 20, 41, 795, DateTimeKind.Utc).AddTicks(6297),
                            Id = 6,
                            KeyTerms = "",
                            PrimaryCompanyId = 1,
                            RelationshipType = "Parent"
                        });
                });

            modelBuilder.Entity("InfoTrack.Domain.Entities.UserCompanyRelationship", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.HasKey("Id");

                    b.ToTable("UserCompanyRelationships");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Description = "Main Company Profile",
                            Name = "Primary"
                        },
                        new
                        {
                            Id = 2,
                            Description = "Competitor to compare against.",
                            Name = "Competitor"
                        },
                        new
                        {
                            Id = 3,
                            Description = "Sister Company",
                            Name = "Related"
                        },
                        new
                        {
                            Id = 4,
                            Description = "Parent/Controller Company",
                            Name = "Parent"
                        });
                });

            modelBuilder.Entity("InfoTrack.Domain.Entities.Company", b =>
                {
                    b.HasOne("InfoTrack.Domain.Entities.Company", "PrimaryParentCompany")
                        .WithMany()
                        .HasForeignKey("PrimaryCompanyId")
                        .OnDelete(DeleteBehavior.Restrict);

                    b.HasOne("InfoTrack.Domain.Entities.User", "User")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.Navigation("PrimaryParentCompany");

                    b.Navigation("User");
                });

            modelBuilder.Entity("InfoTrack.Domain.Entities.Query", b =>
                {
                    b.HasOne("InfoTrack.Domain.Entities.Company", "CompetitorCompany")
                        .WithMany()
                        .HasForeignKey("CompetitorCompanyId")
                        .OnDelete(DeleteBehavior.Restrict);

                    b.HasOne("InfoTrack.Domain.Entities.Company", "MyCompany")
                        .WithMany()
                        .HasForeignKey("MyCompanyId")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.HasOne("InfoTrack.Domain.Entities.SearchEngines", "Engine")
                        .WithMany()
                        .HasForeignKey("SearchEngineId")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.HasOne("InfoTrack.Domain.Entities.User", "User")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.Navigation("CompetitorCompany");

                    b.Navigation("Engine");

                    b.Navigation("MyCompany");

                    b.Navigation("User");
                });

            modelBuilder.Entity("InfoTrack.Domain.Entities.SearchResultItem", b =>
                {
                    b.HasOne("InfoTrack.Domain.Entities.SearchResults", "Results")
                        .WithMany("Items")
                        .HasForeignKey("SearchResultsId")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.Navigation("Results");
                });

            modelBuilder.Entity("InfoTrack.Domain.Entities.SearchResults", b =>
                {
                    b.HasOne("InfoTrack.Domain.Entities.Query", "Query")
                        .WithMany()
                        .HasForeignKey("QueryId")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.HasOne("InfoTrack.Domain.Entities.Query", null)
                        .WithMany("Results")
                        .HasForeignKey("QueryId1");

                    b.Navigation("Query");
                });

            modelBuilder.Entity("InfoTrack.Domain.Entities.UserCompany", b =>
                {
                    b.HasOne("InfoTrack.Domain.Entities.Company", "Company")
                        .WithMany()
                        .HasForeignKey("CompanyId")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.HasOne("InfoTrack.Domain.Entities.Company", "PrimaryParentCompany")
                        .WithMany()
                        .HasForeignKey("PrimaryCompanyId")
                        .OnDelete(DeleteBehavior.Restrict);

                    b.HasOne("InfoTrack.Domain.Entities.User", "User")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.Navigation("Company");

                    b.Navigation("PrimaryParentCompany");

                    b.Navigation("User");
                });

            modelBuilder.Entity("InfoTrack.Domain.Entities.Query", b =>
                {
                    b.Navigation("Results");
                });

            modelBuilder.Entity("InfoTrack.Domain.Entities.SearchResults", b =>
                {
                    b.Navigation("Items");
                });
#pragma warning restore 612, 618
        }
    }
}
