import { Component } from '@angular/core';
import { TopSearchComponent } from "../top-search/top-search.component";
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router';
import { AvatarModule } from 'primeng/avatar';
import { TabsModule } from 'primeng/tabs';

import { PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-user-page',
  standalone: true,
  imports: [ButtonModule, AvatarModule, TabsModule, RouterLink],
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.css'
})
export class UserPageComponent {

  editable: boolean = false;

  currentyLoggedUser = [
    {
      id: 1,
      username: 'fonfi',
      name: 'Adam',
      reviews: 12,
      propositions: 2,
      pfp: 'https://tr.rbxcdn.com/180DAY-d2aa8b558f4c73dc77ab184210a56788/420/420/Hat/Png/noFilter',
      verified: true,
    }
  ];

  currentUser : any;

  constructor() {
    this.currentUser = this.currentyLoggedUser[0];
  }


}
