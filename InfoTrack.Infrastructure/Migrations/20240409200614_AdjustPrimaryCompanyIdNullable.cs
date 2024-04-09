using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace InfoTrack.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class AdjustPrimaryCompanyIdNullable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<DateTime>(
                name: "LastModifiedOn",
                table: "Users",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2024, 4, 9, 20, 6, 14, 57, DateTimeKind.Utc).AddTicks(8382),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2024, 4, 9, 18, 46, 24, 697, DateTimeKind.Utc).AddTicks(6028));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedOn",
                table: "Users",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2024, 4, 9, 20, 6, 14, 57, DateTimeKind.Utc).AddTicks(8163),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2024, 4, 9, 18, 46, 24, 697, DateTimeKind.Utc).AddTicks(5788));

            migrationBuilder.AlterColumn<DateTime>(
                name: "DateCreated",
                table: "UserCompanies",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2024, 4, 9, 20, 6, 14, 57, DateTimeKind.Utc).AddTicks(5810),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2024, 4, 9, 18, 46, 24, 697, DateTimeKind.Utc).AddTicks(3563));

            migrationBuilder.AlterColumn<DateTime>(
                name: "SearchedOn",
                table: "SearchResults",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2024, 4, 9, 20, 6, 14, 56, DateTimeKind.Utc).AddTicks(5516),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2024, 4, 9, 18, 46, 24, 696, DateTimeKind.Utc).AddTicks(3584));

            migrationBuilder.AlterColumn<DateTime>(
                name: "DateCreated",
                table: "Queries",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2024, 4, 9, 20, 6, 14, 56, DateTimeKind.Utc).AddTicks(601),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2024, 4, 9, 18, 46, 24, 695, DateTimeKind.Utc).AddTicks(8942));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedOn",
                table: "Companies",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2024, 4, 9, 20, 6, 14, 55, DateTimeKind.Utc).AddTicks(5091),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2024, 4, 9, 18, 46, 24, 695, DateTimeKind.Utc).AddTicks(3823));

            migrationBuilder.UpdateData(
                table: "Companies",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedOn",
                value: new DateTime(2024, 4, 9, 20, 6, 14, 57, DateTimeKind.Utc).AddTicks(8687));

            migrationBuilder.UpdateData(
                table: "Companies",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreatedOn",
                value: new DateTime(2024, 4, 9, 20, 6, 14, 57, DateTimeKind.Utc).AddTicks(8689));

            migrationBuilder.UpdateData(
                table: "Companies",
                keyColumn: "Id",
                keyValue: 3,
                column: "CreatedOn",
                value: new DateTime(2024, 4, 9, 20, 6, 14, 57, DateTimeKind.Utc).AddTicks(8691));

            migrationBuilder.UpdateData(
                table: "Companies",
                keyColumn: "Id",
                keyValue: 4,
                column: "CreatedOn",
                value: new DateTime(2024, 4, 9, 20, 6, 14, 57, DateTimeKind.Utc).AddTicks(8693));

            migrationBuilder.UpdateData(
                table: "Companies",
                keyColumn: "Id",
                keyValue: 5,
                column: "CreatedOn",
                value: new DateTime(2024, 4, 9, 20, 6, 14, 57, DateTimeKind.Utc).AddTicks(8694));

            migrationBuilder.UpdateData(
                table: "Companies",
                keyColumn: "Id",
                keyValue: 6,
                column: "CreatedOn",
                value: new DateTime(2024, 4, 9, 20, 6, 14, 57, DateTimeKind.Utc).AddTicks(8696));

            migrationBuilder.UpdateData(
                table: "UserCompanies",
                keyColumns: new[] { "CompanyId", "UserId" },
                keyValues: new object[] { 1, 1 },
                column: "DateCreated",
                value: new DateTime(2024, 4, 9, 20, 6, 14, 57, DateTimeKind.Utc).AddTicks(8717));

            migrationBuilder.UpdateData(
                table: "UserCompanies",
                keyColumns: new[] { "CompanyId", "UserId" },
                keyValues: new object[] { 2, 1 },
                column: "DateCreated",
                value: new DateTime(2024, 4, 9, 20, 6, 14, 57, DateTimeKind.Utc).AddTicks(8719));

            migrationBuilder.UpdateData(
                table: "UserCompanies",
                keyColumns: new[] { "CompanyId", "UserId" },
                keyValues: new object[] { 4, 1 },
                column: "DateCreated",
                value: new DateTime(2024, 4, 9, 20, 6, 14, 57, DateTimeKind.Utc).AddTicks(8720));

            migrationBuilder.UpdateData(
                table: "UserCompanies",
                keyColumns: new[] { "CompanyId", "UserId" },
                keyValues: new object[] { 5, 1 },
                column: "DateCreated",
                value: new DateTime(2024, 4, 9, 20, 6, 14, 57, DateTimeKind.Utc).AddTicks(8724));

            migrationBuilder.UpdateData(
                table: "UserCompanies",
                keyColumns: new[] { "CompanyId", "UserId" },
                keyValues: new object[] { 3, 2 },
                column: "DateCreated",
                value: new DateTime(2024, 4, 9, 20, 6, 14, 57, DateTimeKind.Utc).AddTicks(8721));

            migrationBuilder.UpdateData(
                table: "UserCompanies",
                keyColumns: new[] { "CompanyId", "UserId" },
                keyValues: new object[] { 5, 2 },
                column: "DateCreated",
                value: new DateTime(2024, 4, 9, 20, 6, 14, 57, DateTimeKind.Utc).AddTicks(8722));

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "CreatedOn", "LastModifiedOn" },
                values: new object[] { new DateTime(2024, 4, 9, 20, 6, 14, 57, DateTimeKind.Utc).AddTicks(8590), new DateTime(2024, 4, 9, 20, 6, 14, 57, DateTimeKind.Utc).AddTicks(8591) });

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "CreatedOn", "LastModifiedOn" },
                values: new object[] { new DateTime(2024, 4, 9, 20, 6, 14, 57, DateTimeKind.Utc).AddTicks(8592), new DateTime(2024, 4, 9, 20, 6, 14, 57, DateTimeKind.Utc).AddTicks(8593) });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<DateTime>(
                name: "LastModifiedOn",
                table: "Users",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2024, 4, 9, 18, 46, 24, 697, DateTimeKind.Utc).AddTicks(6028),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2024, 4, 9, 20, 6, 14, 57, DateTimeKind.Utc).AddTicks(8382));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedOn",
                table: "Users",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2024, 4, 9, 18, 46, 24, 697, DateTimeKind.Utc).AddTicks(5788),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2024, 4, 9, 20, 6, 14, 57, DateTimeKind.Utc).AddTicks(8163));

            migrationBuilder.AlterColumn<DateTime>(
                name: "DateCreated",
                table: "UserCompanies",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2024, 4, 9, 18, 46, 24, 697, DateTimeKind.Utc).AddTicks(3563),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2024, 4, 9, 20, 6, 14, 57, DateTimeKind.Utc).AddTicks(5810));

            migrationBuilder.AlterColumn<DateTime>(
                name: "SearchedOn",
                table: "SearchResults",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2024, 4, 9, 18, 46, 24, 696, DateTimeKind.Utc).AddTicks(3584),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2024, 4, 9, 20, 6, 14, 56, DateTimeKind.Utc).AddTicks(5516));

            migrationBuilder.AlterColumn<DateTime>(
                name: "DateCreated",
                table: "Queries",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2024, 4, 9, 18, 46, 24, 695, DateTimeKind.Utc).AddTicks(8942),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2024, 4, 9, 20, 6, 14, 56, DateTimeKind.Utc).AddTicks(601));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedOn",
                table: "Companies",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2024, 4, 9, 18, 46, 24, 695, DateTimeKind.Utc).AddTicks(3823),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2024, 4, 9, 20, 6, 14, 55, DateTimeKind.Utc).AddTicks(5091));

            migrationBuilder.UpdateData(
                table: "Companies",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedOn",
                value: new DateTime(2024, 4, 9, 18, 46, 24, 697, DateTimeKind.Utc).AddTicks(6275));

            migrationBuilder.UpdateData(
                table: "Companies",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreatedOn",
                value: new DateTime(2024, 4, 9, 18, 46, 24, 697, DateTimeKind.Utc).AddTicks(6277));

            migrationBuilder.UpdateData(
                table: "Companies",
                keyColumn: "Id",
                keyValue: 3,
                column: "CreatedOn",
                value: new DateTime(2024, 4, 9, 18, 46, 24, 697, DateTimeKind.Utc).AddTicks(6279));

            migrationBuilder.UpdateData(
                table: "Companies",
                keyColumn: "Id",
                keyValue: 4,
                column: "CreatedOn",
                value: new DateTime(2024, 4, 9, 18, 46, 24, 697, DateTimeKind.Utc).AddTicks(6281));

            migrationBuilder.UpdateData(
                table: "Companies",
                keyColumn: "Id",
                keyValue: 5,
                column: "CreatedOn",
                value: new DateTime(2024, 4, 9, 18, 46, 24, 697, DateTimeKind.Utc).AddTicks(6282));

            migrationBuilder.UpdateData(
                table: "Companies",
                keyColumn: "Id",
                keyValue: 6,
                column: "CreatedOn",
                value: new DateTime(2024, 4, 9, 18, 46, 24, 697, DateTimeKind.Utc).AddTicks(6283));

            migrationBuilder.UpdateData(
                table: "UserCompanies",
                keyColumns: new[] { "CompanyId", "UserId" },
                keyValues: new object[] { 1, 1 },
                column: "DateCreated",
                value: new DateTime(2024, 4, 9, 18, 46, 24, 697, DateTimeKind.Utc).AddTicks(6301));

            migrationBuilder.UpdateData(
                table: "UserCompanies",
                keyColumns: new[] { "CompanyId", "UserId" },
                keyValues: new object[] { 2, 1 },
                column: "DateCreated",
                value: new DateTime(2024, 4, 9, 18, 46, 24, 697, DateTimeKind.Utc).AddTicks(6304));

            migrationBuilder.UpdateData(
                table: "UserCompanies",
                keyColumns: new[] { "CompanyId", "UserId" },
                keyValues: new object[] { 4, 1 },
                column: "DateCreated",
                value: new DateTime(2024, 4, 9, 18, 46, 24, 697, DateTimeKind.Utc).AddTicks(6305));

            migrationBuilder.UpdateData(
                table: "UserCompanies",
                keyColumns: new[] { "CompanyId", "UserId" },
                keyValues: new object[] { 5, 1 },
                column: "DateCreated",
                value: new DateTime(2024, 4, 9, 18, 46, 24, 697, DateTimeKind.Utc).AddTicks(6309));

            migrationBuilder.UpdateData(
                table: "UserCompanies",
                keyColumns: new[] { "CompanyId", "UserId" },
                keyValues: new object[] { 3, 2 },
                column: "DateCreated",
                value: new DateTime(2024, 4, 9, 18, 46, 24, 697, DateTimeKind.Utc).AddTicks(6306));

            migrationBuilder.UpdateData(
                table: "UserCompanies",
                keyColumns: new[] { "CompanyId", "UserId" },
                keyValues: new object[] { 5, 2 },
                column: "DateCreated",
                value: new DateTime(2024, 4, 9, 18, 46, 24, 697, DateTimeKind.Utc).AddTicks(6308));

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "CreatedOn", "LastModifiedOn" },
                values: new object[] { new DateTime(2024, 4, 9, 18, 46, 24, 697, DateTimeKind.Utc).AddTicks(6194), new DateTime(2024, 4, 9, 18, 46, 24, 697, DateTimeKind.Utc).AddTicks(6194) });

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "CreatedOn", "LastModifiedOn" },
                values: new object[] { new DateTime(2024, 4, 9, 18, 46, 24, 697, DateTimeKind.Utc).AddTicks(6197), new DateTime(2024, 4, 9, 18, 46, 24, 697, DateTimeKind.Utc).AddTicks(6197) });
        }
    }
}
