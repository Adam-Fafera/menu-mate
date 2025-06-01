import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { SidebarModule } from 'primeng/sidebar';


@Component({
  selector: 'app-restaurant-dashboard',
  standalone: true,
  imports: [MenuModule, ButtonModule, RouterLink, SidebarModule],
  templateUrl: './restaurant-dashboard.component.html',
  styleUrl: './restaurant-dashboard.component.css'
})
export class RestaurantDashboardComponent implements OnInit{


  items: MenuItem[] | undefined;

  ngOnInit(){
    this.items = [
      {label: 'Home', icon:'pi pi-home'},
      {label: 'Proposals', icon:'pi pi-request'},
      {label:'Reviews', icon:'pi pi-reviews', badge:'3'},
    ];
  }

}
