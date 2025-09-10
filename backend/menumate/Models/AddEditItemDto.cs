using menumate.Models.Entities;

namespace menumate.Models
{
    public class AddEditItemDto
    {
        public Guid RestaurantId { get; set; }
        public Guid ItemId { get; set; }
        public MenuItem Item { get; set; }
        public string Description { get; set; }

    }
}
