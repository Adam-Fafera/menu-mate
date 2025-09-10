namespace menumate.Models.Entities
{
    public class EditRestaurant
    {
        public Guid Id { get; set; }
        public Guid RestaurantId { get; set; }
        public Restaurant Restaurant { get; set; }
        public string Description { get; set; } = string.Empty;

        public string? StringValue { get; set; } = string.Empty;
        public float? FloatValue { get; set; } = null;
    }
}
 