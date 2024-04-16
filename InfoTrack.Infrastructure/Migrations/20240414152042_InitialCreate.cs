using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace InfoTrack.Domain.Entities.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "SearchEngines",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    BaseUrl = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false),
                    Description = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SearchEngines", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "SearchResultTypes",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    Description = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SearchResultTypes", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Tags",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Tags", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "UserCompanyRelationships",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    Description = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserCompanyRelationships", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Email = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false),
                    FirstName = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    LastName = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    CreatedOn = table.Column<DateTime>(type: "datetime2", nullable: false, defaultValue: new DateTime(2024, 4, 14, 15, 20, 41, 795, DateTimeKind.Utc).AddTicks(5643)),
                    LastModifiedOn = table.Column<DateTime>(type: "datetime2", nullable: false, defaultValue: new DateTime(2024, 4, 14, 15, 20, 41, 795, DateTimeKind.Utc).AddTicks(5887)),
                    SelectedTheme = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    Title = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    City = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    State = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    Language = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    Timezone = table.Column<string>(type: "nvarchar(25)", maxLength: 25, nullable: true),
                    About = table.Column<string>(type: "nvarchar(500)", maxLength: 500, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Companies",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserId = table.Column<int>(type: "int", nullable: false),
                    PrimaryCompanyId = table.Column<int>(type: "int", nullable: true),
                    RelationshipType = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    Name = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false),
                    BaseUrl = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false),
                    IncludeTerms = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false),
                    CreatedOn = table.Column<DateTime>(type: "datetime2", nullable: false, defaultValue: new DateTime(2024, 4, 14, 15, 20, 41, 792, DateTimeKind.Utc).AddTicks(3508)),
                    DateRemoved = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Companies", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Companies_Companies_PrimaryCompanyId",
                        column: x => x.PrimaryCompanyId,
                        principalTable: "Companies",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Companies_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Queries",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserId = table.Column<int>(type: "int", nullable: false),
                    MyCompanyId = table.Column<int>(type: "int", nullable: false),
                    CompetitorCompanyId = table.Column<int>(type: "int", nullable: true),
                    SearchEngineId = table.Column<int>(type: "int", nullable: false),
                    NumberOfResultsPulled = table.Column<int>(type: "int", nullable: true, defaultValue: 100),
                    Name = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false),
                    IncludeTerms = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false),
                    ExcludeTerms = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    DateCreated = table.Column<DateTime>(type: "datetime2", nullable: false, defaultValue: new DateTime(2024, 4, 14, 15, 20, 41, 793, DateTimeKind.Utc).AddTicks(21)),
                    DateRemoved = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Queries", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Queries_Companies_CompetitorCompanyId",
                        column: x => x.CompetitorCompanyId,
                        principalTable: "Companies",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Queries_Companies_MyCompanyId",
                        column: x => x.MyCompanyId,
                        principalTable: "Companies",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Queries_SearchEngines_SearchEngineId",
                        column: x => x.SearchEngineId,
                        principalTable: "SearchEngines",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Queries_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "UserCompanies",
                columns: table => new
                {
                    UserId = table.Column<int>(type: "int", nullable: false),
                    CompanyId = table.Column<int>(type: "int", nullable: false),
                    Id = table.Column<int>(type: "int", nullable: false),
                    PrimaryCompanyId = table.Column<int>(type: "int", nullable: true),
                    DateCreated = table.Column<DateTime>(type: "datetime2", nullable: false, defaultValue: new DateTime(2024, 4, 14, 15, 20, 41, 795, DateTimeKind.Utc).AddTicks(2983)),
                    RelationshipType = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    KeyTerms = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    DateRemoved = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserCompanies", x => new { x.UserId, x.CompanyId });
                    table.ForeignKey(
                        name: "FK_UserCompanies_Companies_CompanyId",
                        column: x => x.CompanyId,
                        principalTable: "Companies",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_UserCompanies_Companies_PrimaryCompanyId",
                        column: x => x.PrimaryCompanyId,
                        principalTable: "Companies",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_UserCompanies_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "SearchResults",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    QueryId = table.Column<int>(type: "int", nullable: false),
                    HighestRank = table.Column<int>(type: "int", nullable: false, defaultValue: 0),
                    Top100Count = table.Column<int>(type: "int", nullable: false, defaultValue: 0),
                    SearchedOn = table.Column<DateTime>(type: "datetime2", nullable: false, defaultValue: new DateTime(2024, 4, 14, 15, 20, 41, 794, DateTimeKind.Utc).AddTicks(654)),
                    ResultTypeCode = table.Column<string>(type: "nvarchar(max)", nullable: false, defaultValue: "Seed"),
                    QueryId1 = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SearchResults", x => x.Id);
                    table.ForeignKey(
                        name: "FK_SearchResults_Queries_QueryId",
                        column: x => x.QueryId,
                        principalTable: "Queries",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_SearchResults_Queries_QueryId1",
                        column: x => x.QueryId1,
                        principalTable: "Queries",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "SearchResultItems",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    SearchResultsId = table.Column<int>(type: "int", nullable: false),
                    Url = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false),
                    ResultTypeName = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    Tags = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SearchResultItems", x => x.Id);
                    table.ForeignKey(
                        name: "FK_SearchResultItems_SearchResults_SearchResultsId",
                        column: x => x.SearchResultsId,
                        principalTable: "SearchResults",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.InsertData(
                table: "SearchEngines",
                columns: new[] { "Id", "BaseUrl", "Description", "Name" },
                values: new object[,]
                {
                    { 1, "https://www.google.com/search?num=###&q=", "Always returns 100 results (if possible)", "Google" },
                    { 2, "https://www.jedi.com/search?num=###&q=", "These are not the droids you are looking for...", "Jedi" }
                });

            migrationBuilder.InsertData(
                table: "SearchResultTypes",
                columns: new[] { "Id", "Description", "Name" },
                values: new object[,]
                {
                    { 1, "Generated with DB creation", "Seed" },
                    { 2, "Direct link to site", "Direct" },
                    { 3, "Related company link", "Related" },
                    { 4, "Mentioned or Referenced", "Mentioned" }
                });

            migrationBuilder.InsertData(
                table: "UserCompanyRelationships",
                columns: new[] { "Id", "Description", "Name" },
                values: new object[,]
                {
                    { 1, "Main Company Profile", "Primary" },
                    { 2, "Competitor to compare against.", "Competitor" },
                    { 3, "Sister Company", "Related" },
                    { 4, "Parent/Controller Company", "Parent" }
                });

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "About", "City", "CreatedOn", "Email", "FirstName", "Language", "LastModifiedOn", "LastName", "SelectedTheme", "State", "Timezone", "Title" },
                values: new object[,]
                {
                    { 1, null, null, new DateTime(2024, 4, 14, 15, 20, 41, 795, DateTimeKind.Utc).AddTicks(6138), "Lys.Seholm@Gmail.com", "Alyssa", null, new DateTime(2024, 4, 14, 15, 20, 41, 795, DateTimeKind.Utc).AddTicks(6139), "Seholm", null, null, null, null },
                    { 2, null, null, new DateTime(2024, 4, 14, 15, 20, 41, 795, DateTimeKind.Utc).AddTicks(6140), "Batman@DefinitelyNotBruceWayne.com", "Bruce", null, new DateTime(2024, 4, 14, 15, 20, 41, 795, DateTimeKind.Utc).AddTicks(6141), "Wayne", null, null, null, null }
                });

            migrationBuilder.InsertData(
                table: "Companies",
                columns: new[] { "Id", "BaseUrl", "CreatedOn", "DateRemoved", "IncludeTerms", "Name", "PrimaryCompanyId", "RelationshipType", "UserId" },
                values: new object[,]
                {
                    { 1, "https://www.infotrack.com/", new DateTime(2024, 4, 14, 15, 20, 41, 795, DateTimeKind.Utc).AddTicks(6253), null, "[\"efiling\",\"integration\"]", "InfoTrack", null, "Primary", 1 },
                    { 4, "https://www.dogsrustitusville.com/", new DateTime(2024, 4, 14, 15, 20, 41, 795, DateTimeKind.Utc).AddTicks(6259), null, "[\"happy\",\"humans\"]", "Dogs R' Us", null, "Primary", 2 },
                    { 2, "https://catsrusrescue.org/", new DateTime(2024, 4, 14, 15, 20, 41, 795, DateTimeKind.Utc).AddTicks(6255), null, "[\"unlimited\",\"food\"]", "Cats R' Us", 1, "Sister", 1 },
                    { 3, "https://batman.fandom.com/", new DateTime(2024, 4, 14, 15, 20, 41, 795, DateTimeKind.Utc).AddTicks(6257), null, "[\"batman\",\"unmasked\"]", "Wayne Enterprises", 1, "Competitor", 1 },
                    { 5, "https://dailyplanetdc.com/planet-profiles/", new DateTime(2024, 4, 14, 15, 20, 41, 795, DateTimeKind.Utc).AddTicks(6260), null, "[\"superman\",\"lois\"]", "The Daily Planet", 4, "Competitor", 2 },
                    { 6, "https://www.clio.com/", new DateTime(2024, 4, 14, 15, 20, 41, 795, DateTimeKind.Utc).AddTicks(6261), null, "[\"efiling\"]", "Clio", 1, "Parent", 1 }
                });

            migrationBuilder.InsertData(
                table: "UserCompanies",
                columns: new[] { "CompanyId", "UserId", "DateCreated", "DateRemoved", "Id", "KeyTerms", "PrimaryCompanyId", "RelationshipType" },
                values: new object[,]
                {
                    { 1, 1, new DateTime(2024, 4, 14, 15, 20, 41, 795, DateTimeKind.Utc).AddTicks(6290), null, 1, "", null, "Primary" },
                    { 4, 1, new DateTime(2024, 4, 14, 15, 20, 41, 795, DateTimeKind.Utc).AddTicks(6294), null, 3, "dogs", 1, "Competitor" },
                    { 2, 1, new DateTime(2024, 4, 14, 15, 20, 41, 795, DateTimeKind.Utc).AddTicks(6292), null, 2, "cats", 1, "Sister" },
                    { 5, 1, new DateTime(2024, 4, 14, 15, 20, 41, 795, DateTimeKind.Utc).AddTicks(6297), null, 6, "", 1, "Parent" },
                    { 3, 2, new DateTime(2024, 4, 14, 15, 20, 41, 795, DateTimeKind.Utc).AddTicks(6295), null, 4, "batman", null, "Primary" },
                    { 5, 2, new DateTime(2024, 4, 14, 15, 20, 41, 795, DateTimeKind.Utc).AddTicks(6296), null, 5, "superman, lois", 4, "Competitor" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_Companies_PrimaryCompanyId",
                table: "Companies",
                column: "PrimaryCompanyId");

            migrationBuilder.CreateIndex(
                name: "IX_Companies_UserId",
                table: "Companies",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_Queries_CompetitorCompanyId",
                table: "Queries",
                column: "CompetitorCompanyId");

            migrationBuilder.CreateIndex(
                name: "IX_Queries_MyCompanyId",
                table: "Queries",
                column: "MyCompanyId");

            migrationBuilder.CreateIndex(
                name: "IX_Queries_SearchEngineId",
                table: "Queries",
                column: "SearchEngineId");

            migrationBuilder.CreateIndex(
                name: "IX_Queries_UserId",
                table: "Queries",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_SearchResultItems_SearchResultsId",
                table: "SearchResultItems",
                column: "SearchResultsId");

            migrationBuilder.CreateIndex(
                name: "IX_SearchResults_QueryId",
                table: "SearchResults",
                column: "QueryId");

            migrationBuilder.CreateIndex(
                name: "IX_SearchResults_QueryId1",
                table: "SearchResults",
                column: "QueryId1");

            migrationBuilder.CreateIndex(
                name: "IX_UserCompanies_CompanyId",
                table: "UserCompanies",
                column: "CompanyId");

            migrationBuilder.CreateIndex(
                name: "IX_UserCompanies_PrimaryCompanyId",
                table: "UserCompanies",
                column: "PrimaryCompanyId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "SearchResultItems");

            migrationBuilder.DropTable(
                name: "SearchResultTypes");

            migrationBuilder.DropTable(
                name: "Tags");

            migrationBuilder.DropTable(
                name: "UserCompanies");

            migrationBuilder.DropTable(
                name: "UserCompanyRelationships");

            migrationBuilder.DropTable(
                name: "SearchResults");

            migrationBuilder.DropTable(
                name: "Queries");

            migrationBuilder.DropTable(
                name: "Companies");

            migrationBuilder.DropTable(
                name: "SearchEngines");

            migrationBuilder.DropTable(
                name: "Users");
        }
    }
}
