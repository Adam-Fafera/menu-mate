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

  products = [
    {
      name: 'Calories (kcal)',
      category: 280,
    },
    {
      name: 'Fats (g)',
      category: 9,
    },
    {
      name: 'Carbohydrates (g)',
      category: 34,
    },
    {
      name: 'Protein (g)',
      category: 15,
    },

  ];
}
