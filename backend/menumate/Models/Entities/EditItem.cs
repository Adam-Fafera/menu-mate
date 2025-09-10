namespace menumate.Models.Entities
{
    public class EditItem
    {
        public Guid Id { get; set; }
        
        public Guid RestaurantId { get; set; }
        public Guid ItemId { get; set; }
        public MenuItem Item { get; set; }
        public string Description { get; set; }


    }
}
