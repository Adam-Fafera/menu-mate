using Microsoft.AspNetCore.Identity;

namespace menumate.Models.Entities
{
    public class User : IdentityUser<Guid>
    {
        public Guid Id { get; set; }
        public IdentityUser<Guid> IdentityUser { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string ImgPath { get; set; }    
    }
}
