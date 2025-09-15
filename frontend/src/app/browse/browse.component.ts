import { Component } from '@angular/core';
import { RestaurantCardComponent } from '../restaurant-card/restaurant-card.component';
import { TopSearchComponent } from "../top-search/top-search.component";

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [RestaurantCardComponent, TopSearchComponent],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.css'
})
export class BrowseComponent {
  visible: boolean = false;
  restaurants: any[] = [];
  reviews: any[] = [];
  rating: number = 0;

  ngOnInit() {
    fetch('https://localhost:7084/api/Restaurants')
      .then(response => response.json())
      .then(data => {
        this.restaurants = data;
        console.log(this.restaurants);
      })
      .catch(error => {
        console.error('Error fetching restaurants:', error);
      });

  }
  
}
