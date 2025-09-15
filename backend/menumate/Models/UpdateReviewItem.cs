namespace menumate.Models
{
    public class UpdateReviewItem
    {
        public Guid ItemId { get; set; }
        public string Description { get; set; }
        public float Rating { get; set; }
    }
}