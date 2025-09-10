using menumate.Data;
using menumate.Models;
using menumate.Models.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

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
            var editRestaurant = dbContext.EditRestaurants.Find(id);
            if (editRestaurant == null)
            {
                return NotFound();
            }
            return Ok(editRestaurant);
        }

        [HttpPost]
        public IActionResult AddEditRestaurant(AddEditRestaurantDto addEditRestaurantDto)
        {
            var editRestaurantEntity = new EditRestaurant()
            {
                RestaurantId = addEditRestaurantDto.RestaurantId,
                Description = addEditRestaurantDto.Description,
                StringValue = addEditRestaurantDto.StringValue,
                FloatValue = addEditRestaurantDto.FloatValue
            };

            dbContext.EditRestaurants.Add(editRestaurantEntity);
            dbContext.SaveChanges();
            return Ok(editRestaurantEntity);
        }

        [HttpPut]
        [Route("{id:guid}")]
        public IActionResult UpdateEditRestaurant(Guid id, UpdateEditRestaurantDto updateEditRestaurantDto)
        {
            var existingEditRestaurant = dbContext.EditRestaurants.Find(id);
            if (existingEditRestaurant == null)
            {
                return NotFound();
            }
            existingEditRestaurant.RestaurantId = updateEditRestaurantDto.RestaurantId;
            existingEditRestaurant.Description = updateEditRestaurantDto.Description;
            existingEditRestaurant.StringValue = updateEditRestaurantDto.StringValue;
            existingEditRestaurant.FloatValue = updateEditRestaurantDto.FloatValue;
            dbContext.SaveChanges();
            return Ok(existingEditRestaurant);
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
