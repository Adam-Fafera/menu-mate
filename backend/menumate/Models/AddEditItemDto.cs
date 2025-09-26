using menumate.Models.Entities;

namespace menumate.Models
{
    public class AddEditItemDto
    {
        public Guid ItemId { get; set; }
        public required string PropertyName { get; set; }
        public required string NewValue { get; set; }
    }
}
