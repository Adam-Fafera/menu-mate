using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace menumate.Migrations
{
    /// <inheritdoc />
    public partial class AdditionalEditItemChanges : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "RestaurantId",
                table: "EditItems");

            migrationBuilder.AddColumn<DateTime>(
                name: "CreatedAt",
                table: "EditItems",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "NewValue",
                table: "EditItems",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "PropertyName",
                table: "EditItems",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CreatedAt",
                table: "EditItems");

            migrationBuilder.DropColumn(
                name: "NewValue",
                table: "EditItems");

            migrationBuilder.DropColumn(
                name: "PropertyName",
                table: "EditItems");

            migrationBuilder.AddColumn<Guid>(
                name: "RestaurantId",
                table: "EditItems",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));
        }
    }
}
