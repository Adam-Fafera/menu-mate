namespace menumate.Models.Entities
{
    public class EditItem
    {
        public Guid Id { get; set; }
        public Guid ItemId { get; set; }
        public string PropertyName { get; set; }
        public string NewValue { get; set; }
        public DateTime CreatedAt { get; set; }
        public MenuItem Item { get; set; }

    }
}
