using menumate.Models.Entities;

namespace menumate.Models
{
    public class AddEditRestaurantDto
    {
        public Guid RestaurantId { get; set; }
        public string PropertyName { get; set; }
        public string NewValue { get; set; }
    }
}
