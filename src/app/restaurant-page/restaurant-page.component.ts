import { Component } from '@angular/core';
import { TopSearchComponent } from "../top-search/top-search.component";
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-restaurant-page',
  imports: [TopSearchComponent, ButtonModule, IconFieldModule, RatingModule, FormsModule, RouterLink],
  templateUrl: './restaurant-page.component.html',
  styleUrl: './restaurant-page.component.css'
})
export class RestaurantPageComponent {
  value : number = 4;
}
