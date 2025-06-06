import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { SidebarModule } from 'primeng/sidebar';
import { SideMenuComponent } from "../side-menu/side-menu.component";


@Component({
  selector: 'app-restaurant-dashboard',
  standalone: true,
  imports: [MenuModule, ButtonModule, RouterLink, SidebarModule, AvatarModule, SideMenuComponent],
  templateUrl: './restaurant-dashboard.component.html',
  styleUrl: './restaurant-dashboard.component.css'
})
export class RestaurantDashboardComponent{

}
