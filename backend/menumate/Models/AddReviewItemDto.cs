﻿namespace menumate.Models
{
    public class AddReviewItemDto
    {
        public Guid ItemId { get; set; }
        public string UserName { get; set; }
        public string UserImagePath { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public float Rating { get; set; }
    }
}