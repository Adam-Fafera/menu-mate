﻿using menumate.Data;
using menumate.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace menumate.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReviewItemsController : ControllerBase
    {
        public readonly ApplicationDbContext dbContext;

        public ReviewItemsController(ApplicationDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        [HttpGet]
        public IActionResult GetReviewItems()
        {
            return Ok(dbContext.ReviewItems.ToList());
        }

        [HttpGet]
        [Route("{id:guid}")]
        public IActionResult GetReviewItemsByItemId(Guid id)
        {
            var items = dbContext.ReviewItems.Where(item => item.ItemId == id);
            
            if (items == Empty)
            {
                return NotFound();
            }
            return Ok(items);
        }

        [HttpPost]
        public IActionResult AddReviewItem(AddReviewItemDto addReviewItemDto)
        {
            var reviewItemEntity = new Models.Entities.ReviewItem()
            {
                ItemId = addReviewItemDto.ItemId,
                UserName = addReviewItemDto.UserName,
                UserImagePath  = addReviewItemDto.UserImagePath,
                Title = addReviewItemDto.Title,
                Description = addReviewItemDto.Description,
                Rating = addReviewItemDto.Rating
            };
            dbContext.ReviewItems.Add(reviewItemEntity);
            dbContext.SaveChanges();
            return Ok(reviewItemEntity);
        }

        [HttpPut]
        [Route("{id:guid}")]
        public IActionResult UpdateReviewItem(Guid id, UpdateReviewItem updateReviewItemDto)
        {
            var existingItem = dbContext.ReviewItems.Find(id);
            if (existingItem == null)
            {
                return NotFound();
            }
            existingItem.ItemId = updateReviewItemDto.ItemId;
            existingItem.Description = updateReviewItemDto.Description;
            existingItem.Rating = updateReviewItemDto.Rating;
            dbContext.SaveChanges();
            return Ok(existingItem);
        }

        [HttpDelete]
        [Route("{id:guid}")]
        public IActionResult DeleteReviewItem(Guid id)
        {
            var existingItem = dbContext.ReviewItems.Find(id);
            if (existingItem == null)
            {
                return NotFound();
            }
            dbContext.ReviewItems.Remove(existingItem);
            dbContext.SaveChanges();
            return Ok(existingItem);
        }

    }
}
