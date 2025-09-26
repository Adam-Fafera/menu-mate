using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace menumate.Migrations
{
    /// <inheritdoc />
    public partial class AddRestaurantNavigationToEditRestaurant : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_EditRestaurants_RestaurantId",
                table: "EditRestaurants",
                column: "RestaurantId");

            migrationBuilder.AddForeignKey(
                name: "FK_EditRestaurants_Restaurants_RestaurantId",
                table: "EditRestaurants",
                column: "RestaurantId",
                principalTable: "Restaurants",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_EditRestaurants_Restaurants_RestaurantId",
                table: "EditRestaurants");

            migrationBuilder.DropIndex(
                name: "IX_EditRestaurants_RestaurantId",
                table: "EditRestaurants");
        }
    }
}
