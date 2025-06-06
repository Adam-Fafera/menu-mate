import { Component } from '@angular/core';
import { SideMenuComponent } from '../side-menu/side-menu.component';
import { DashboardAddItemComponent } from "../dashboard-add-item/dashboard-add-item.component";

@Component({
  selector: 'app-restaurant-dashboard-add-item',
  standalone: true,
  imports: [SideMenuComponent, DashboardAddItemComponent],
  templateUrl: './restaurant-dashboard-add-item.component.html',
  styleUrl: './restaurant-dashboard-add-item.component.css'
})
export class RestaurantDashboardAddItemComponent {

}
