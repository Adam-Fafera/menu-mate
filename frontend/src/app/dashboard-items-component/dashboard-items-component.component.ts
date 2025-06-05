import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { BadgeModule } from 'primeng/badge';
import { CardModule } from 'primeng/card';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-dashboard-items-component',
  imports: [CardModule, BadgeModule, ToastModule],
  templateUrl: './dashboard-items-component.component.html',
  styleUrl: './dashboard-items-component.component.css'
})
export class DashboardItemsComponentComponent implements OnInit {
  
  items : any[] = [];

  constructor(private router : Router) {}


  ngOnInit(): void {
  
    this.items = [
        {
          id: 1,
          name: 'Sandwich with teriyaki chicken with an even longer name',
          price: 21.99,
          currency: 'zł',
          rating: 3,
          reviews: 0,
          alergens: 'nuts',
          proteins: '2g',
          carbohydrates: '3g',
          fats: '1g',
          description: 'A really really really really really really really really really really really really really really really really really really tasty teriyaki chicken sandwich  ',
          img: 'https://recipes.net/wp-content/uploads/2023/05/teriyaki-chicken-sandwich_0ea096d60540fb2c66f58ab4bfc51ede.jpeg'
        },
        {
          id: 2,
          name: 'Salad',
          price: 15.50,
          currency: 'zł',
          rating: 4,
          reviews: 1,
          alergens: null,
          proteins: '5g',
          carbohydrates: '8g',
          fats: '2g',
          description: 'Fresh garden salad with a light vinaigrette',
          img: 'https://www.tasteofhome.com/wp-content/uploads/2025/02/Favorite-Mediterranean-Salad_EXPS_TOHcom25_41556_MD_P2_02_05_1b.jpg',
        },
        {
          id: 3,
          name: 'Soup',
          price: 12.00,
          currency: 'zł',
          rating: 5,
          reviews: 2,
          alergens: 'dairy',
          proteins: '3g',
          carbohydrates: '10g',
          fats: '4g',
          description: 'Creamy tomato soup with basil',
          img: 'https://www.thegardengrazer.com/wp-content/uploads/2024/10/vegan-tomato-soup-75.jpg',
        },
        {
          id: 4,
          name: 'Pasta',
          price: 25.00,
          currency: 'zł',
          rating: 4,
          reviews: 0,
          alergens: 'gluten',
          proteins: '7g',
          carbohydrates: '30g',
          fats: '6g',
          description: 'Spaghetti with a rich bolognese sauce',
          img: 'https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_4:3/k%2FPhoto%2FRecipes%2F2023-01-Caramelized-Tomato-Paste-Pasta%2F06-CARAMELIZED-TOMATO-PASTE-PASTA-039',
        },
      ];

  }

  goToItem() {
    // {current url}/{itemID}
    this.router.navigate(['/dashboard/1/item-edits/1']);
  }
}
