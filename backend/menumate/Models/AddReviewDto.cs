namespace menumate.Models
{
    public class AddReviewDto
    {
        public Guid RestaurantId { get; set; }
        public string Description { get; set; }
        public float Rating { get; set; }
    }
}
