using menumate.Data;
using menumate.Models;
using menumate.Models.Entities;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

namespace menumate.Controllers
{
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
            var edit = new EditItem()
            {
                ItemId = addEditItemDto.ItemId,
                RestaurantId = addEditItemDto.RestaurantId,
                Description = addEditItemDto.Description,

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
