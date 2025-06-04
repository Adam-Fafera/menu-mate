import { Component } from '@angular/core';
import { SideMenuComponent } from '../side-menu/side-menu.component';
import { ReviewComponent } from "../review/review.component";
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-restaurant-dashboard-item-reviews',
  standalone: true,
  imports: [SideMenuComponent, ReviewComponent, CardModule],
  templateUrl: './restaurant-dashboard-item-reviews.component.html',
  styleUrl: './restaurant-dashboard-item-reviews.component.css'
})
export class RestaurantDashboardItemReviewsComponent {

}
