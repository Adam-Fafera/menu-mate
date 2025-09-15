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
    public class ItemsController : ControllerBase
    {
        public readonly ApplicationDbContext dbContext;

        public ItemsController(ApplicationDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        [HttpGet]
        public IActionResult GetItems()
        {
            return Ok(dbContext.Items.ToList());
        }


        [HttpGet]
        [Route("{id:guid}")]
        public IActionResult GetItemById(Guid id)
        {
            var item = dbContext.Items.Find(id);
            
            if (item == null)
            {
                return NotFound();
            }
            
            return Ok(item);
        }

        [HttpGet]
        [Route("Restaurant/{id:guid}")]
        public IActionResult GetItemsByRestaurant(Guid id)
        {
            var items = dbContext.Items.Where(item => item.RestaurantId == id).ToList();
            return Ok(items);
        }
        

        [HttpPost]
        public IActionResult AddItem(AddItemDto addItemDto)
        {
            var itemEntity = new MenuItem()
            {
                Name = addItemDto.Name,
                Description = addItemDto.Description,
                Price = addItemDto.Price,
                //Currency = (MenuItem.FiscalCurrency)(addItemDto.Currency),
                Calories = addItemDto.Calories,
                Carbs = addItemDto.Carbs,
                Fats = addItemDto.Fats,
                Proteins = addItemDto.Proteins,
                Allergens = addItemDto.Allergens,
                Image = addItemDto.Image,
                RestaurantId = addItemDto.RestaurantId
            }; 

            dbContext.Items.Add(itemEntity);
            dbContext.SaveChanges();
            return Ok(itemEntity);
        }

        [HttpPut]
        [Route("{id:guid}")]
        public IActionResult UpdateItem(UpdateItemDto updateItemDto, Guid id) 
        {
            var itemEntity = dbContext.Items.Find(id);
            if (itemEntity == null) { return NotFound(); }

            itemEntity.Name = updateItemDto.Name;
            itemEntity.Description = updateItemDto.Description;
            itemEntity.Price = updateItemDto.Price;
            //itemEntity.Currency = (MenuItem.FiscalCurrency)(updateItemDto.Currency);
            itemEntity.Calories = updateItemDto.Calories;
            itemEntity.Carbs = updateItemDto.Carbs;
            itemEntity.Fats = updateItemDto.Fats;
            itemEntity.Allergens = updateItemDto.Allergens;
            itemEntity.Proteins = updateItemDto.Proteins;
            
            itemEntity.Image = updateItemDto.Image;

            dbContext.SaveChanges();

            return Ok(itemEntity);
        }

        [HttpDelete]
        public IActionResult DeleteItem(Guid id)
        {
            var item = dbContext.Items.Find(id);

            if (item == null)
            {
                return NotFound();
            }

            dbContext.Remove(id);
            dbContext.SaveChanges();
            return Ok("Successfully deleted item with id: " + id);
        }
    }
}
