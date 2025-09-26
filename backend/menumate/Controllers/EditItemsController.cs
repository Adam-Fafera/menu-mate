using menumate.Data;
using menumate.Models;
using menumate.Models.Entities;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

namespace menumate.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EditItemsController : Controller
    {
        public readonly ApplicationDbContext dbContext;

        public EditItemsController(ApplicationDbContext dbContext) 
        {
            this.dbContext = dbContext;
        }

        [HttpGet]
        public IActionResult GetEdits()
        {
            var edits = dbContext.EditItems.ToList();
            return Ok(edits);
        }

        [HttpGet]
        [Route("{id:guid}")]
        public IActionResult GetEditById(Guid id)
        {
            var edit = dbContext.EditItems.Find(id);
            
            if (edit == null)
            {
                return NotFound();
            }

            return Ok(edit);
        }

        [HttpPost]
        public IActionResult AddEdit(AddEditItemDto addEditItemDto)
        {
            var property = typeof(MenuItem).GetProperty(addEditItemDto.PropertyName);
            if (property == null)
                return BadRequest("Invalid property name");
            
            var edit = new EditItem()
            {
                ItemId = addEditItemDto.ItemId,
                PropertyName = addEditItemDto.PropertyName,
                NewValue = addEditItemDto.NewValue,
                CreatedAt = DateTime.UtcNow
            };

            dbContext.EditItems.Add(edit);
            dbContext.SaveChanges();
            return Ok(edit);
        }

        [HttpDelete]
        [Route("{id:guid}")]
        public IActionResult DeleteEdit(Guid id)
        {
            var edit = dbContext.EditItems.Find(id);
            if (edit == null)
            {
                return NotFound();
            }
            dbContext.EditItems.Remove(edit);
            dbContext.SaveChanges();
            return Ok("Successfully deleted edit with id: " + id);
        }
    }
}
