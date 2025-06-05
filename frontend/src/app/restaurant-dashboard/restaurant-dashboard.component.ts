import { Component, OnInit } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { SidebarModule } from 'primeng/sidebar';
import { SideMenuComponent } from "../side-menu/side-menu.component";
import { TestComponentComponent } from "../test-component/test-component.component";


@Component({
  selector: 'app-restaurant-dashboard',
  standalone: true,
  imports: [MenuModule, ButtonModule, SidebarModule, AvatarModule, SideMenuComponent, TestComponentComponent],
  templateUrl: './restaurant-dashboard.component.html',
  styleUrl: './restaurant-dashboard.component.css'
})
export class RestaurantDashboardComponent{

  goToItem(){
    console.log("go to item")
  }

}
