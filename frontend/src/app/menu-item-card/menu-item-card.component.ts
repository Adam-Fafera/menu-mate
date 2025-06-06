import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { TabsModule } from 'primeng/tabs';
import { TableModule } from 'primeng/table';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { ReviewComponent } from "../review/review.component";

@Component({
  selector: 'app-menu-item-card',
  imports: [CardModule, ButtonModule, DialogModule, TabsModule, TableModule, RatingModule, FormsModule, ReviewComponent],
  templateUrl: './menu-item-card.component.html',
  styleUrl: './menu-item-card.component.css'
})
export class MenuItemCardComponent {
  visible : boolean = false;
  value : number = 4;

  showDialog() {
    this.visible = true;
    console.log('Clicked on the card');
  }

  items = [
    {
      restaurantId: 2,
      itemId : 1,
      name : 'Kebab',
      price : 25.99,
      currency: 'zł',
      macros : {
        calories: 280,
        fats: 8,
        carbs: 34,
        proteins: 16
      },
      description: 'Super duper ultra kebabes, z mięsem wołowym, kurczakiem lub mieszanym, świeżymi warzywami oraz z sosem do wyboru.',
      image: "https://pl.vihaad.com/wp-content/uploads/2024/11/Doner-Kebab-najlepsze-miejsce-w-Twoim-miescie.webp"
    },

  ]
}
