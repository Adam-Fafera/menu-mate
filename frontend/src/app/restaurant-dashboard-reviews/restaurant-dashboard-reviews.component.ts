import { Component } from '@angular/core';
import { SideMenuComponent } from '../side-menu/side-menu.component';
import { ReviewComponent } from "../review/review.component";

@Component({
  selector: 'app-restaurant-dashboard-reviews',
  standalone: true,
  imports: [SideMenuComponent, ReviewComponent],
  templateUrl: './restaurant-dashboard-reviews.component.html',
  styleUrl: './restaurant-dashboard-reviews.component.css'
})
export class RestaurantDashboardReviewsComponent {

}
