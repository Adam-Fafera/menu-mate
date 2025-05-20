import { Component } from '@angular/core';
import { RestaurantCardComponent } from '../restaurant-card/restaurant-card.component';
import { TopSearchComponent } from "../top-search/top-search.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [RestaurantCardComponent, TopSearchComponent, CommonModule],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.css'
})
export class BrowseComponent {

  restaurants = [
    {id:1, name: "Smuggler's Inn", rating: 4, img: "https://goldwasser.pl/wp-content/uploads/elementor/thumbs/img-10-1-q8og8cjddjcr5h1n2fxaq883jkyobsqpck77ze3tqw.jpg"},
    {id:2, name: "Mogger's Outt", rating: 1, img: "https://purohotel.pl/media/22nfhnuw/ph_gdansk_magari001.jpg?width=562&height=351&format=webp&v=1d8f3722d28cea0"},
    {id:3, name: "Muala Wuala", rating: 5, img: "https://visitgdansk.com/res/1195104/1195107/chleb_i_wino_chmielna.jpg?size=580x435&crop"},
    {id:4, name: "Des pa Cito", rating: 3, img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/c1/fc/03/second-room.jpg?w=200&h=200&s=1"},
    {id:5, name: "Die Fruhstuck", rating: 2, img: "https://visitgdansk.com/res/963111/963114/Restauracja%20Goldwasser.jpg?size=580x435&crop"},
    {id:6, name: "what if i just have a name", img: "https://i0.wp.com/www.routesandtrips.com/wp-content/uploads/2015/04/restaurant-pod-lososiem-gdansk.jpg?fit=2048%2C1530&ssl=1"}
  ]; 
 
}
