import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-restaurant-card',
  imports: [ButtonModule, CardModule, RatingModule, FormsModule],
  templateUrl: './restaurant-card.component.html',
  styleUrl: './restaurant-card.component.css'
})
export class RestaurantCardComponent {
  @Input() restaurant:any;
  value : number = 4;
  
  constructor(private router: Router) {}

  goToRestaurant(): void {
    console.log("Clicked go to restaurant")
    if(this.restaurant && this.restaurant.id){
      this.router.navigate(['/restaurant', this.restaurant.id])
    }
  }
  
}
