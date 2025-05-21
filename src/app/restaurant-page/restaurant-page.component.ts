import { Component, OnInit } from '@angular/core';
import { TopSearchComponent } from "../top-search/top-search.component";
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { TableModule } from 'primeng/table'
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-restaurant-page',
  imports: [TopSearchComponent, ButtonModule, IconFieldModule, RatingModule, FormsModule, RouterLink, TableModule, CommonModule],
  templateUrl: './restaurant-page.component.html',
  styleUrl: './restaurant-page.component.css'
})
export class RestaurantPageComponent implements OnInit{
  
  restaurants: any[] = [];
  selectedRestaurant: any;

  constructor(private route: ActivatedRoute) {}
  
  ngOnInit() {
    const urlID = this.route.snapshot.paramMap.get('id');
    console.log("This URL's ID is:", urlID);
    
    if(!urlID){
      console.error("ID parameter missing in URL");
      return;
    }
    

        this.restaurants = [
          {
              id: 1,
              name: "Smuggler's Inn",
              rating: 4.0,
              location: "Cat-ovice ul. Kocia 5",
              img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/e1/5c/3c/caption.jpg",
              description: "Description of the restaurant - At Smuggler's Inn, we believe in simple, good food done right. Our menu is built around fresh, seasonal ingredients sourced from local suppliers whenever possible. Experience vibrant flavors and thoughtfully prepared dishes in a bright and welcoming setting. Join us for a taste of something delicious.",
              hours: {
                  Monday: "6:00 - 19:00",
                  Tuesday: "6:00 - 19:00",
                  Wednesday: "6:00 - 19:00",
                  Thursday: "6:00 - 19:00",
                  Friday: "6:00 - 21:00",
                  Saturday: "8:00 - 21:00",
                  Sunday: "Closed"
              }
          },
          {
              id: 2,
              name: "Mogger's Outt",
              rating: 1.0,
              location: "Moew-landia",
              img: "https://purohotel.pl/media/22nfhnuw/ph_gdansk_magari001.jpg?width=562&height=351&format=webp&v=1d8f3722d28cea0",
              description: "Description of the restaurant - At Mogger's Outt, we believe in simple, good food done right. Our menu is built around fresh, seasonal ingredients sourced from local suppliers whenever possible. Experience vibrant flavors and thoughtfully prepared dishes in a bright and welcoming setting. Join us for a taste of something delicious.",
              hours: {
                  Monday: "6:00 - 19:00",
                  Tuesday: "6:00 - 19:00",
                  Wednesday: "6:00 - 19:00",
                  Thursday: "6:00 - 19:00",
                  Friday: "6:00 - 21:00",
                  Saturday: "8:00 - 21:00",
                  Sunday: "8:00 - 19:00"
              }
          },
          {
              id: 3,
              name: "Muala Wuala",
              rating: 5.0,
              location: "Moewlandia",
              img: "https://visitgdansk.com/res/1195104/1195107/chleb_i_wino_chmielna.jpg?size=580x435&crop",
              description: "Description of the restaurant - At Muala Wuala, we believe in simple, good food done right. Our menu is built around fresh, seasonal ingredients sourced from local suppliers whenever possible. Experience vibrant flavors and thoughtfully prepared dishes in a bright and welcoming setting. Join us for a taste of something delicious.",
              hours: {
                  Monday: "6:00 - 19:00",
                  Tuesday: "6:00 - 19:00",
                  Wednesday: "6:00 - 19:00",
                  Thursday: "6:00 - 19:00",
                  Friday: "6:00 - 21:00",
                  Saturday: "8:00 - 21:00",
                  Sunday: "8:00 - 19:00"
              }
          },
          {
              id: 4,
              name: "Des pa Cito",
              rating: 3.0,
              location: "Moewlandia",
              img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/c1/fc/03/second-room.jpg?w=200&h=200&s=1",
              description: "Description of the restaurant - At Des pa Cito, we believe in simple, good food done right. Our menu is built around fresh, seasonal ingredients sourced from local suppliers whenever possible. Experience vibrant flavors and thoughtfully prepared dishes in a bright and welcoming setting. Join us for a taste of something delicious.",
              hours: {
                  Monday: "6:00 - 19:00",
                  Tuesday: "6:00 - 19:00",
                  Wednesday: "6:00 - 19:00",
                  Thursday: "6:00 - 19:00",
                  Friday: "6:00 - 21:00",
                  Saturday: "8:00 - 21:00",
                  Sunday: "8:00 - 19:00"
              }
          },
          {
              id: 5,
              name: "Die Fruhstuck",
              rating: 2.0,
              location: "Moewlandia",
              img: "https://visitgdansk.com/res/963111/963114/Restauracja%20Goldwasser.jpg?size=580x435&crop",
              description: "Description of the restaurant - At Die Fruhstuck, we believe in simple, good food done right. Our menu is built around fresh, seasonal ingredients sourced from local suppliers whenever possible. Experience vibrant flavors and thoughtfully prepared dishes in a bright and welcoming setting. Join us for a taste of something delicious.",
              hours: {
                  Monday: "6:00 - 19:00",
                  Tuesday: "6:00 - 19:00",
                  Wednesday: "6:00 - 19:00",
                  Thursday: "6:00 - 19:00",
                  Friday: "6:00 - 21:00",
                  Saturday: "8:00 - 21:00",
                  Sunday: "8:00 - 19:00"
              }
          },
          {
              id: 6,
              name: "what if i just have a name",
              location: "Moewlandia",
              img: "https://i0.wp.com/www.routesandtrips.com/wp-content/uploads/2015/04/restaurant-pod-lososiem-gdansk.jpg?fit=2048%2C1530&ssl=1",
              description: "Description of the restaurant - At what if i just have a name, we believe in simple, good food done right. Our menu is built around fresh, seasonal ingredients sourced from local suppliers whenever possible. Experience vibrant flavors and thoughtfully prepared dishes in a bright and welcoming setting. Join us for a taste of something delicious.",
              hours: {
                  Monday: "6:00 - 19:00",
                  Tuesday: "6:00 - 19:00",
                  Wednesday: "6:00 - 19:00",
                  Thursday: "6:00 - 19:00",
                  Friday: "6:00 - 21:00",
                  Saturday: "8:00 - 21:00",
                  Sunday: "8:00 - 19:00"
              }
          }
      ];

        this.selectedRestaurant = this.restaurants.find(restaurant => restaurant.id === parseFloat(urlID));
  
    };

    getHoursArray(): { day : String, hours: String} [] {
          return Object.keys(this.selectedRestaurant.hours).map(day =>({
            day: day,
            hours: this.selectedRestaurant.hours[day],
          }));
        }
    
    

  value : number = 4;
}
