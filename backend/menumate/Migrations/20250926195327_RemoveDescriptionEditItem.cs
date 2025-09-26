using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace menumate.Migrations
{
    /// <inheritdoc />
    public partial class RemoveDescriptionEditItem : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Description",
                table: "EditItems");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Description",
                table: "EditItems",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }
    }
}
