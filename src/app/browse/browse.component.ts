import { Component } from '@angular/core';
import { RestaurantCardComponent } from '../restaurant-card/restaurant-card.component';
import { TopSearchComponent } from "../top-search/top-search.component";

@Component({
  selector: 'app-browse',
  imports: [RestaurantCardComponent, TopSearchComponent],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.css'
})
export class BrowseComponent {

}
