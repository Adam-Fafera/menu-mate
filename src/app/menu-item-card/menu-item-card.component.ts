import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-menu-item-card',
  imports: [CardModule, ButtonModule ],
  templateUrl: './menu-item-card.component.html',
  styleUrl: './menu-item-card.component.css'
})
export class MenuItemCardComponent {

}
