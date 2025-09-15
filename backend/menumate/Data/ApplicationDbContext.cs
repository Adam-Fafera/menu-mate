using menumate.Models.Entities;
using Microsoft.EntityFrameworkCore;

namespace menumate.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions options) : base(options) { }

        public DbSet<Restaurant> Restaurants { get; set; }

        public DbSet<User> Users { get; set; }

        public DbSet<Review> Reviews { get; set; }

        public DbSet<ReviewItem> ReviewItems { get; set; }

        public DbSet<EditItem> EditItems { get; set; }

        public DbSet<EditRestaurant> EditRestaurants { get; set; }

        public DbSet<MenuItem> Items { get; set; }
    }
}
