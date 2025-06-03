import { Component } from '@angular/core';
import { SideMenuComponent } from '../side-menu/side-menu.component';
import { ReviewComponent } from "../review/review.component";

@Component({
  selector: 'app-restaurant-dashboard-item-reviews',
  standalone: true,
  imports: [SideMenuComponent, ReviewComponent],
  templateUrl: './restaurant-dashboard-item-reviews.component.html',
  styleUrl: './restaurant-dashboard-item-reviews.component.css'
})
export class RestaurantDashboardItemReviewsComponent {

}
