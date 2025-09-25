import { Component, OnInit } from '@angular/core';
import { TopSearchComponent } from "../top-search/top-search.component";
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute} from '@angular/router';
import { TableModule } from 'primeng/table'
import { AccordionModule } from 'primeng/accordion';
import { DialogModule } from 'primeng/dialog';
import { TextareaModule } from 'primeng/textarea';
import { MenuItemCardComponent } from "../menu-item-card/menu-item-card.component";
import { Toast } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ReviewComponent } from "../review/review.component";
import { ProposeRestaurantEditComponent } from "../propose-restaurant-edit/propose-restaurant-edit.component";
import { ReviewRestaurantMakeComponent } from "../review-restaurant-make/review-restaurant-make.component";

@Component({
  selector: 'app-restaurant-page',
  imports: [TopSearchComponent, ButtonModule, IconFieldModule, RatingModule, FormsModule, TableModule, AccordionModule, DialogModule, TextareaModule, MenuItemCardComponent, Toast, ReviewComponent, ProposeRestaurantEditComponent, ReviewRestaurantMakeComponent],
  templateUrl: './restaurant-page.component.html',
  styleUrl: './restaurant-page.component.css',
  providers: [MessageService]
})
export class RestaurantPageComponent implements OnInit{
  
  restaurants: any[] = [];
  selectedRestaurant: any;
  items: any[] = [];
  reviews: any[] = [];
  restaurantRating: number = 0;
  visibleReview: boolean = false;
  visibleAllReviews: boolean = false;
  visibleEdit: boolean = false;

  showReviewDialog() {
    this.visibleReview = true;
  }
  hideReviewDialog() {
    this.visibleReview = false;
  }

  showAllReviews(){
    this.visibleAllReviews = true;
  }
  hideAllReviews(){
    this.visibleAllReviews = false;
  }

  showEditDialog(){
    this.visibleEdit = true;
    console.log("Show edit = ", this.visibleEdit)
  }

  hideEditDialog(){
    this.visibleEdit = false;
    console.log("Show edit = ", this.visibleEdit)
  }

  

  constructor(private route: ActivatedRoute, private messageService: MessageService) {}

  
  ngOnInit() {
    const urlID = this.route.snapshot.paramMap.get('id');

  
    if(!urlID){
      console.error("Restaurant with this ID doesn't exist");
      return;
    }

    fetch(`https://localhost:7084/api/Restaurants/${urlID}`)
      .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch restaurant data');
      }
      return response.json();
      })
      .then(data => {
      this.selectedRestaurant = data;
      })
      .catch(error => {
      console.error('Error fetching restaurant:', error);
      });

      ``
    fetch(`https://localhost:7084/api/Reviews/${urlID}`)
      .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch reviews data');
      }
      return response.json();
      })
      .then(data => {
      this.reviews = data;
      })
      .catch(error => {
      console.error('Error fetching reviews:', error);
      });
  };
  
  calculateAverageRating(): number {
    if (this.reviews.length === 0) {
      this.restaurantRating = 0;
      return 0;
    }
    const total = this.reviews.reduce((sum, review) => sum + (review.rating || 0), 0);
    this.restaurantRating = parseFloat((total / this.reviews.length).toFixed(2));
    return this.restaurantRating;
  }

  
}
  
