import { Component } from '@angular/core';
import { SideMenuComponent } from '../side-menu/side-menu.component';
import { DashboardItemEditsComponent } from "../dashboard-item-edits/dashboard-item-edits.component";

@Component({
  selector: 'app-restaurant-dashboard-edits',
  standalone: true,
  imports: [SideMenuComponent, DashboardItemEditsComponent],
  templateUrl: './restaurant-dashboard-edits.component.html',
  styleUrl: './restaurant-dashboard-edits.component.css'
})
export class RestaurantDashboardEditsComponent {

}
