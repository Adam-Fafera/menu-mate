namespace menumate.Models.Entities
{
    public class EditRestaurant
    {
        public Guid Id { get; set; }
        public Guid RestaurantId { get; set; }
        public string PropertyName { get; set; }
        public string NewValue { get; set; }
        public DateTime CreatedAt { get; set; }
        public Restaurant Restaurant { get; set; }
    }
}
 