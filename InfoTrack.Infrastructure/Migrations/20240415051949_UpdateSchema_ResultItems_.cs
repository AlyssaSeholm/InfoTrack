using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace InfoTrack.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class UpdateSchema_ResultItems_ : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<DateTime>(
                name: "LastModifiedOn",
                table: "Users",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2024, 4, 15, 5, 19, 49, 475, DateTimeKind.Utc).AddTicks(9968),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2024, 4, 14, 15, 20, 41, 795, DateTimeKind.Utc).AddTicks(5887));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedOn",
                table: "Users",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2024, 4, 15, 5, 19, 49, 475, DateTimeKind.Utc).AddTicks(9671),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2024, 4, 14, 15, 20, 41, 795, DateTimeKind.Utc).AddTicks(5643));

            migrationBuilder.AlterColumn<DateTime>(
                name: "DateCreated",
                table: "UserCompanies",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2024, 4, 15, 5, 19, 49, 475, DateTimeKind.Utc).AddTicks(6825),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2024, 4, 14, 15, 20, 41, 795, DateTimeKind.Utc).AddTicks(2983));

            migrationBuilder.AlterColumn<DateTime>(
                name: "SearchedOn",
                table: "SearchResults",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2024, 4, 15, 5, 19, 49, 474, DateTimeKind.Utc).AddTicks(5504),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2024, 4, 14, 15, 20, 41, 794, DateTimeKind.Utc).AddTicks(654));

            migrationBuilder.AddColumn<string>(
                name: "Breadcrumbs_Link",
                table: "SearchResultItems",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Breadcrumbs_Text",
                table: "SearchResultItems",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "DataVed",
                table: "SearchResultItems",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Href",
                table: "SearchResultItems",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "ResultRank",
                table: "SearchResultItems",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Snippet",
                table: "SearchResultItems",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Title",
                table: "SearchResultItems",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AlterColumn<DateTime>(
                name: "DateCreated",
                table: "Queries",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2024, 4, 15, 5, 19, 49, 473, DateTimeKind.Utc).AddTicks(6946),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2024, 4, 14, 15, 20, 41, 793, DateTimeKind.Utc).AddTicks(21));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedOn",
                table: "Companies",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2024, 4, 15, 5, 19, 49, 473, DateTimeKind.Utc).AddTicks(1483),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2024, 4, 14, 15, 20, 41, 792, DateTimeKind.Utc).AddTicks(3508));

            migrationBuilder.UpdateData(
                table: "Companies",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedOn",
                value: new DateTime(2024, 4, 15, 5, 19, 49, 476, DateTimeKind.Utc).AddTicks(308));

            migrationBuilder.UpdateData(
                table: "Companies",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreatedOn",
                value: new DateTime(2024, 4, 15, 5, 19, 49, 476, DateTimeKind.Utc).AddTicks(310));

            migrationBuilder.UpdateData(
                table: "Companies",
                keyColumn: "Id",
                keyValue: 3,
                column: "CreatedOn",
                value: new DateTime(2024, 4, 15, 5, 19, 49, 476, DateTimeKind.Utc).AddTicks(312));

            migrationBuilder.UpdateData(
                table: "Companies",
                keyColumn: "Id",
                keyValue: 4,
                column: "CreatedOn",
                value: new DateTime(2024, 4, 15, 5, 19, 49, 476, DateTimeKind.Utc).AddTicks(314));

            migrationBuilder.UpdateData(
                table: "Companies",
                keyColumn: "Id",
                keyValue: 5,
                column: "CreatedOn",
                value: new DateTime(2024, 4, 15, 5, 19, 49, 476, DateTimeKind.Utc).AddTicks(316));

            migrationBuilder.UpdateData(
                table: "Companies",
                keyColumn: "Id",
                keyValue: 6,
                column: "CreatedOn",
                value: new DateTime(2024, 4, 15, 5, 19, 49, 476, DateTimeKind.Utc).AddTicks(317));

            migrationBuilder.UpdateData(
                table: "UserCompanies",
                keyColumns: new[] { "CompanyId", "UserId" },
                keyValues: new object[] { 1, 1 },
                column: "DateCreated",
                value: new DateTime(2024, 4, 15, 5, 19, 49, 476, DateTimeKind.Utc).AddTicks(341));

            migrationBuilder.UpdateData(
                table: "UserCompanies",
                keyColumns: new[] { "CompanyId", "UserId" },
                keyValues: new object[] { 2, 1 },
                column: "DateCreated",
                value: new DateTime(2024, 4, 15, 5, 19, 49, 476, DateTimeKind.Utc).AddTicks(343));

            migrationBuilder.UpdateData(
                table: "UserCompanies",
                keyColumns: new[] { "CompanyId", "UserId" },
                keyValues: new object[] { 4, 1 },
                column: "DateCreated",
                value: new DateTime(2024, 4, 15, 5, 19, 49, 476, DateTimeKind.Utc).AddTicks(344));

            migrationBuilder.UpdateData(
                table: "UserCompanies",
                keyColumns: new[] { "CompanyId", "UserId" },
                keyValues: new object[] { 5, 1 },
                column: "DateCreated",
                value: new DateTime(2024, 4, 15, 5, 19, 49, 476, DateTimeKind.Utc).AddTicks(370));

            migrationBuilder.UpdateData(
                table: "UserCompanies",
                keyColumns: new[] { "CompanyId", "UserId" },
                keyValues: new object[] { 3, 2 },
                column: "DateCreated",
                value: new DateTime(2024, 4, 15, 5, 19, 49, 476, DateTimeKind.Utc).AddTicks(345));

            migrationBuilder.UpdateData(
                table: "UserCompanies",
                keyColumns: new[] { "CompanyId", "UserId" },
                keyValues: new object[] { 5, 2 },
                column: "DateCreated",
                value: new DateTime(2024, 4, 15, 5, 19, 49, 476, DateTimeKind.Utc).AddTicks(368));

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "CreatedOn", "LastModifiedOn" },
                values: new object[] { new DateTime(2024, 4, 15, 5, 19, 49, 476, DateTimeKind.Utc).AddTicks(200), new DateTime(2024, 4, 15, 5, 19, 49, 476, DateTimeKind.Utc).AddTicks(201) });

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "CreatedOn", "LastModifiedOn" },
                values: new object[] { new DateTime(2024, 4, 15, 5, 19, 49, 476, DateTimeKind.Utc).AddTicks(202), new DateTime(2024, 4, 15, 5, 19, 49, 476, DateTimeKind.Utc).AddTicks(203) });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Breadcrumbs_Link",
                table: "SearchResultItems");

            migrationBuilder.DropColumn(
                name: "Breadcrumbs_Text",
                table: "SearchResultItems");

            migrationBuilder.DropColumn(
                name: "DataVed",
                table: "SearchResultItems");

            migrationBuilder.DropColumn(
                name: "Href",
                table: "SearchResultItems");

            migrationBuilder.DropColumn(
                name: "ResultRank",
                table: "SearchResultItems");

            migrationBuilder.DropColumn(
                name: "Snippet",
                table: "SearchResultItems");

            migrationBuilder.DropColumn(
                name: "Title",
                table: "SearchResultItems");

            migrationBuilder.AlterColumn<DateTime>(
                name: "LastModifiedOn",
                table: "Users",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2024, 4, 14, 15, 20, 41, 795, DateTimeKind.Utc).AddTicks(5887),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2024, 4, 15, 5, 19, 49, 475, DateTimeKind.Utc).AddTicks(9968));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedOn",
                table: "Users",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2024, 4, 14, 15, 20, 41, 795, DateTimeKind.Utc).AddTicks(5643),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2024, 4, 15, 5, 19, 49, 475, DateTimeKind.Utc).AddTicks(9671));

            migrationBuilder.AlterColumn<DateTime>(
                name: "DateCreated",
                table: "UserCompanies",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2024, 4, 14, 15, 20, 41, 795, DateTimeKind.Utc).AddTicks(2983),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2024, 4, 15, 5, 19, 49, 475, DateTimeKind.Utc).AddTicks(6825));

            migrationBuilder.AlterColumn<DateTime>(
                name: "SearchedOn",
                table: "SearchResults",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2024, 4, 14, 15, 20, 41, 794, DateTimeKind.Utc).AddTicks(654),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2024, 4, 15, 5, 19, 49, 474, DateTimeKind.Utc).AddTicks(5504));

            migrationBuilder.AlterColumn<DateTime>(
                name: "DateCreated",
                table: "Queries",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2024, 4, 14, 15, 20, 41, 793, DateTimeKind.Utc).AddTicks(21),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2024, 4, 15, 5, 19, 49, 473, DateTimeKind.Utc).AddTicks(6946));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedOn",
                table: "Companies",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2024, 4, 14, 15, 20, 41, 792, DateTimeKind.Utc).AddTicks(3508),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2024, 4, 15, 5, 19, 49, 473, DateTimeKind.Utc).AddTicks(1483));

            migrationBuilder.UpdateData(
                table: "Companies",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedOn",
                value: new DateTime(2024, 4, 14, 15, 20, 41, 795, DateTimeKind.Utc).AddTicks(6253));

            migrationBuilder.UpdateData(
                table: "Companies",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreatedOn",
                value: new DateTime(2024, 4, 14, 15, 20, 41, 795, DateTimeKind.Utc).AddTicks(6255));

            migrationBuilder.UpdateData(
                table: "Companies",
                keyColumn: "Id",
                keyValue: 3,
                column: "CreatedOn",
                value: new DateTime(2024, 4, 14, 15, 20, 41, 795, DateTimeKind.Utc).AddTicks(6257));

            migrationBuilder.UpdateData(
                table: "Companies",
                keyColumn: "Id",
                keyValue: 4,
                column: "CreatedOn",
                value: new DateTime(2024, 4, 14, 15, 20, 41, 795, DateTimeKind.Utc).AddTicks(6259));

            migrationBuilder.UpdateData(
                table: "Companies",
                keyColumn: "Id",
                keyValue: 5,
                column: "CreatedOn",
                value: new DateTime(2024, 4, 14, 15, 20, 41, 795, DateTimeKind.Utc).AddTicks(6260));

            migrationBuilder.UpdateData(
                table: "Companies",
                keyColumn: "Id",
                keyValue: 6,
                column: "CreatedOn",
                value: new DateTime(2024, 4, 14, 15, 20, 41, 795, DateTimeKind.Utc).AddTicks(6261));

            migrationBuilder.UpdateData(
                table: "UserCompanies",
                keyColumns: new[] { "CompanyId", "UserId" },
                keyValues: new object[] { 1, 1 },
                column: "DateCreated",
                value: new DateTime(2024, 4, 14, 15, 20, 41, 795, DateTimeKind.Utc).AddTicks(6290));

            migrationBuilder.UpdateData(
                table: "UserCompanies",
                keyColumns: new[] { "CompanyId", "UserId" },
                keyValues: new object[] { 2, 1 },
                column: "DateCreated",
                value: new DateTime(2024, 4, 14, 15, 20, 41, 795, DateTimeKind.Utc).AddTicks(6292));

            migrationBuilder.UpdateData(
                table: "UserCompanies",
                keyColumns: new[] { "CompanyId", "UserId" },
                keyValues: new object[] { 4, 1 },
                column: "DateCreated",
                value: new DateTime(2024, 4, 14, 15, 20, 41, 795, DateTimeKind.Utc).AddTicks(6294));

            migrationBuilder.UpdateData(
                table: "UserCompanies",
                keyColumns: new[] { "CompanyId", "UserId" },
                keyValues: new object[] { 5, 1 },
                column: "DateCreated",
                value: new DateTime(2024, 4, 14, 15, 20, 41, 795, DateTimeKind.Utc).AddTicks(6297));

            migrationBuilder.UpdateData(
                table: "UserCompanies",
                keyColumns: new[] { "CompanyId", "UserId" },
                keyValues: new object[] { 3, 2 },
                column: "DateCreated",
                value: new DateTime(2024, 4, 14, 15, 20, 41, 795, DateTimeKind.Utc).AddTicks(6295));

            migrationBuilder.UpdateData(
                table: "UserCompanies",
                keyColumns: new[] { "CompanyId", "UserId" },
                keyValues: new object[] { 5, 2 },
                column: "DateCreated",
                value: new DateTime(2024, 4, 14, 15, 20, 41, 795, DateTimeKind.Utc).AddTicks(6296));

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "CreatedOn", "LastModifiedOn" },
                values: new object[] { new DateTime(2024, 4, 14, 15, 20, 41, 795, DateTimeKind.Utc).AddTicks(6138), new DateTime(2024, 4, 14, 15, 20, 41, 795, DateTimeKind.Utc).AddTicks(6139) });

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "CreatedOn", "LastModifiedOn" },
                values: new object[] { new DateTime(2024, 4, 14, 15, 20, 41, 795, DateTimeKind.Utc).AddTicks(6140), new DateTime(2024, 4, 14, 15, 20, 41, 795, DateTimeKind.Utc).AddTicks(6141) });
        }
    }
}
