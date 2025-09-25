﻿namespace menumate.Models
{
    public class AddReviewDto
    {
        public Guid RestaurantId { get; set; }
        public Guid UserId { get; set; }
        public string UserName { get; set; }
        public string UserImagePath { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public float Rating { get; set; }
    }
}
