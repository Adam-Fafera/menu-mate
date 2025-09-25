using menumate.Data;
using menumate.Models;
using menumate.Models.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace menumate.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EditRestaurantsController : ControllerBase
    {
        private readonly ApplicationDbContext dbContext;
        public EditRestaurantsController(ApplicationDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        [HttpGet]
        public IActionResult GetEditRestaurants()
        {
            return Ok(dbContext.EditRestaurants.ToList());
        }

        [HttpGet]
        [Route("{id:guid}")]
        public IActionResult GetEditRestaurantById(Guid id)
        {
            var editRestaurant = dbContext.EditRestaurants.Where(edit => edit.RestaurantId == id).ToList();

            if (editRestaurant == null)
            {
                return NotFound();
            }
            return Ok(editRestaurant);
        }

        [HttpPost]
        public IActionResult AddEditRestaurant(AddEditRestaurantDto addEditRestaurantDto)
        {

            var property = typeof(Restaurant).GetProperty(addEditRestaurantDto.PropertyName);
            if (property == null)
                return BadRequest("Invalid property name");

            var edit = new EditRestaurant
            {
                RestaurantId = addEditRestaurantDto.RestaurantId,
                PropertyName = addEditRestaurantDto.PropertyName,
                NewValue = addEditRestaurantDto.NewValue,
                CreatedAt = DateTime.UtcNow
            };

            dbContext.EditRestaurants.Add(edit);
            dbContext.SaveChanges();

            return Ok(edit);
        }

        [HttpPut]
        [Route("{id:guid}")]
        public IActionResult ApproveEdit(Guid id)
        {
            var edit = dbContext.EditRestaurants.Include(e => e.RestaurantId).FirstOrDefault(e => e.Id == id);

            if (edit == null)
                return NotFound("Edit not found");

            var property = typeof(Restaurant).GetProperty(edit.PropertyName);
            if (property == null)
                return BadRequest("Invalid property name");

            try
            {
                var convertedValue = Convert.ChangeType(edit.NewValue, property.PropertyType);
                property.SetValue(edit.RestaurantId, convertedValue);
            }
            catch
            {
                return BadRequest("Failed to convert new value to the correct type");
            }

            dbContext.SaveChanges();
            return Ok(edit);
        }


        [HttpDelete]
        [Route("{id:guid}")]
        public IActionResult DeleteEditRestaurant(Guid id)
        {
            var existingEditRestaurant = dbContext.EditRestaurants.Find(id);
            if (existingEditRestaurant == null)
            {
                return NotFound();
            }
            dbContext.EditRestaurants.Remove(existingEditRestaurant);
            dbContext.SaveChanges();
            return Ok(existingEditRestaurant);
        }
    }
}
