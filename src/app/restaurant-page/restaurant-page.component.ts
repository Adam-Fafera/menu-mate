import { Component, OnInit } from '@angular/core';
import { TopSearchComponent } from "../top-search/top-search.component";
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TableModule } from 'primeng/table'
import { CommonModule } from '@angular/common';
import { AccordionModule } from 'primeng/accordion';
import { DialogModule } from 'primeng/dialog';
import { FloatLabel } from 'primeng/floatlabel';
import { TextareaModule } from 'primeng/textarea';


@Component({
  selector: 'app-restaurant-page',
  imports: [TopSearchComponent, ButtonModule, IconFieldModule, 
            RatingModule, FormsModule, TableModule,
            CommonModule, AccordionModule, DialogModule, TextareaModule,
            FloatLabel
          ],
  templateUrl: './restaurant-page.component.html',
  styleUrl: './restaurant-page.component.css'
})
export class RestaurantPageComponent implements OnInit{
  
  restaurants: any[] = [];
  selectedRestaurant: any;
  visibleReview: boolean = false;
  visibleAllReviews: boolean = false;

  showReviewDialog() {
    this.visibleReview = true;
  }
  hideReviewDialog() {
    this.visibleReview = false;
  }

  showAllReviews(){
    this.visibleAllReviews = true;
  }
  hideAllReviews(){
    this.visibleAllReviews = false;
  }
  

  constructor(private route: ActivatedRoute, private router: Router) {}

  
  ngOnInit() {
    const urlID = this.route.snapshot.paramMap.get('id');
  
    
    if(!urlID){
      console.error("Restaurant with this ID doesn't exist");
      return;
    }

      this.restaurants = [
        {
          id: 1,
          name: "Smuggler's Inn",
          rating: 4.4,
          reviewCount: 20,
          location: "Gdańsk, ul. Długa 12",
          phone: "512 566 209",
          img:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/e1/5c/3c/caption.jpg",
          description:
            "A cozy spot in the heart of Gdańsk, Smuggler's Inn offers traditional Polish cuisine with a modern twist. Try our pierogi with wild mushrooms!",
          hours: {
            Monday: "6:00 - 19:00",
            Tuesday: "6:00 - 19:00",
            Wednesday: "6:00 - 19:00",
            Thursday: "6:00 - 19:00",
            Friday: "6:00 - 21:00",
            Saturday: "8:00 - 21:00",
            Sunday: "Closed",
          },
        },
        {
          id: 2,
          name: "Mogger's Outt",
          rating: 1.2,
          reviewCount: 21,
          location: "Kraków, Rynek Główny 1",
          phone: "601 234 567",
          img: "https://purohotel.pl/media/22nfhnuw/ph_gdansk_magari001.jpg?width=562&height=351&format=webp&v=1d8f3722d28cea0",
          description:
            "Mogger's Outt is known for its late-night eats and lively atmosphere. Perfect for a quick bite after exploring Kraków's nightlife.",
          hours: {
            Monday: "6:00 - 19:00",
            Tuesday: "6:00 - 19:00",
            Wednesday: "6:00 - 19:00",
            Thursday: "6:00 - 19:00",
            Friday: "6:00 - 21:00",
            Saturday: "8:00 - 21:00",
            Sunday: "8:00 - 19:00",
          },
        },
        {
          id: 3,
          name: "Muala Wuala",
          rating: 5.0,
          reviewCount: 3433,
          location: "Warszawa, ul. Nowy Świat 64",
          phone: "722 333 444",
          img:
            "https://visitgdansk.com/res/1195104/1195107/chleb_i_wino_chmielna.jpg?size=580x435&crop",
          description:
            "Experience fine dining at Muala Wuala, located on Warsaw's vibrant Nowy Świat street. Our chef specializes in innovative Polish cuisine.",
          hours: {
            Monday: "6:00 - 19:00",
            Tuesday: "6:00 - 19:00",
            Wednesday: "6:00 - 19:00",
            Thursday: "6:00 - 19:00",
            Friday: "6:00 - 21:00",
            Saturday: "8:00 - 21:00",
            Sunday: "8:00 - 19:00",
          },
        },
        {
          id: 4,
          name: "Des pa Cito",
          rating: 3.0,
          reviewCount: 1,
          location: "Wrocław, Rynek 9",
          phone: "888 999 000",
          img:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/c1/fc/03/second-room.jpg?w=200&h=200&s=1",
          description:
            "A taste of Spain in Wrocław! Des pa Cito offers a wide selection of tapas and Spanish wines in a cozy setting.",
          hours: {
            Monday: "6:00 - 19:00",
            Tuesday: "6:00 - 19:00",
            Wednesday: "6:00 - 19:00",
            Thursday: "6:00 - 19:00",
            Friday: "6:00 - 21:00",
            Saturday: "8:00 - 21:00",
            Sunday: "8:00 - 19:00",
          },
        },
        {
          id: 5,
          name: "Die Fruhstuck",
          rating: 3.3,
          reviewCount: 53,
          location: "Poznań, Stary Rynek 55",
          phone: "505 404 303",
          img:
            "https://visitgdansk.com/res/963111/963114/Restauracja%20Goldwasser.jpg?size=580x435&crop",
          description:
            "Start your day right at Die Fruhstuck in Poznań! We serve a variety of breakfast classics and local specialties.",
          hours: {
            Monday: "6:00 - 19:00",
            Tuesday: "6:00 - 19:00",
            Wednesday: "6:00 - 19:00",
            Thursday: "6:00 - 19:00",
            Friday: "6:00 - 21:00",
            Saturday: "8:00 - 21:00",
            Sunday: "8:00 - 19:00",
          },
        },
        {
          id: 6,
          name: "what if i just have a name",
          rating: 2.0,
          reviewCount: 6,
          location: "Łódź, ul. Piotrkowska 12",
          phone: "799 888 777",
          img:
            "https://i0.wp.com/www.routesandtrips.com/wp-content/uploads/2015/04/restaurant-pod-lososiem-gdansk.jpg?fit=2048%2C1530&ssl=1",
          description:
            "Located on Łódź's famous Piotrkowska street, this restaurant offers a unique dining experience with a focus on fusion cuisine.",
          hours: {
            Monday: "6:00 - 19:00",
            Tuesday: "6:00 - 19:00",
            Wednesday: "6:00 - 19:00",
            Thursday: "6:00 - 19:00",
            Friday: "6:00 - 21:00",
            Saturday: "8:00 - 21:00",
            Sunday: "8:00 - 19:00",
          },
        },
      ];

      this.selectedRestaurant = this.restaurants.find(restaurant => restaurant.id === parseFloat(urlID));         
    };

    getHoursArray(): { day : String, hours: String} [] {
      return Object.keys(this.selectedRestaurant.hours).map(day =>({
        day: day,
        hours: this.selectedRestaurant.hours[day],
      }));
    };
    
    get value() : number {
      return this.selectedRestaurant ? this.selectedRestaurant.rating : 0;
    };
    
    set value(rating: number) {
      if(this.selectedRestaurant) {
        this.selectedRestaurant.rating = rating;
      }
    };
}
  
