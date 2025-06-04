import { Component, OnInit } from '@angular/core';
import { SideMenuComponent } from '../side-menu/side-menu.component';
import { BadgeModule } from 'primeng/badge';
import { DataViewModule } from 'primeng/dataview';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-restaurant-dashboard-item-edits',
  standalone: true,
  imports: [SideMenuComponent, CardModule, BadgeModule],
  templateUrl: './restaurant-dashboard-item-edits.component.html',
  styleUrl: './restaurant-dashboard-item-edits.component.css'
})
export class RestaurantDashboardItemEditsComponent implements OnInit {
  
  items : any[] = [];

    ngOnInit(): void {

      this.items = [
        {
          id: 1,
          name: 'Sandwich',
          price: 21.99,
          rating: 3,
          reviews: 0,
          alergens: 'nuts',
          proteins: '2g',
          carbohydrates: '3g',
          fats: '1g',
          description: 'A really tasty teriyaki chicken sandwich',
          img: 'https://recipes.net/wp-content/uploads/2023/05/teriyaki-chicken-sandwich_0ea096d60540fb2c66f58ab4bfc51ede.jpeg'
        },
        {
          id: 2,
          name: 'Salad',
          price: 15.50,
          rating: 4,
          reviews: 1,
          alergens: null,
          proteins: '5g',
          carbohydrates: '8g',
          fats: '2g',
          description: 'Fresh garden salad with a light vinaigrette',
          img: '',
        },
        {
          id: 3,
          name: 'Soup',
          price: 12.00,
          rating: 5,
          reviews: 2,
          alergens: 'dairy',
          proteins: '3g',
          carbohydrates: '10g',
          fats: '4g',
          description: 'Creamy tomato soup with basil',
          img: '',
        },
        {
          id: 4,
          name: 'Pasta',
          price: 25.00,
          rating: 4,
          reviews: 0,
          alergens: 'gluten',
          proteins: '7g',
          carbohydrates: '30g',
          fats: '6g',
          description: 'Spaghetti with a rich bolognese sauce',
          img: '',
        },
      ];

    }
  }
