import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-card',
  imports: [ButtonModule, CardModule],
  templateUrl: './restaurant-card.component.html',
  styleUrl: './restaurant-card.component.css'
})
export class RestaurantCardComponent {
  @Input() restaurant:any;
  
  constructor(private router: Router) {}

  goToRestaurant(): void {
    console.log("Clicked go to restaurant")
    if(this.restaurant && this.restaurant.id){
      this.router.navigate(['/restaurant', this.restaurant.id])
    }
  }
  
}
