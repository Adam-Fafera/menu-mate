import { Component, OnInit } from '@angular/core';
import { TopSearchComponent } from "../top-search/top-search.component";
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { TableModule } from 'primeng/table'


@Component({
  selector: 'app-restaurant-page',
  imports: [TopSearchComponent, ButtonModule, IconFieldModule, RatingModule, FormsModule, RouterLink, TableModule],
  templateUrl: './restaurant-page.component.html',
  styleUrl: './restaurant-page.component.css'
})
export class RestaurantPageComponent implements OnInit{
  
  restaurants: any[] = [];

  ngOnInit() {
        this.restaurants = [
            { day: 'Monday', hour: '8:00 - 16:00' },
            { day: 'Tuesday', hour: '8:00 - 16:00' },
            { day: 'Wednesday', hour: '8:00 - 16:00' },
            { day: 'Thursday', hour: '8:00 - 16:00' },
            { day: 'Friday', hour: '8:00 - 16:00' },
            { day: 'Saturday', hour: '8:00 - 16:00' },
            { day: 'Sundday', hour: 'Closed' }
          ]
    };

  value : number = 4;
}
