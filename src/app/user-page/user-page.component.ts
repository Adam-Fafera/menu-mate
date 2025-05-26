import { Component } from '@angular/core';
import { TopSearchComponent } from "../top-search/top-search.component";
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router';
import { AvatarModule } from 'primeng/avatar';

@Component({
  selector: 'app-user-page',
  standalone: true,
  imports: [TopSearchComponent, ButtonModule, RouterLink, AvatarModule],
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.css'
})
export class UserPageComponent {

  currentUser = [
    {
      id: 1,
      username: 'fonfi',
      name: 'Adam',
      reviews: 12,
      propositions: 2,
      pfp: 'https://tr.rbxcdn.com/180DAY-d2aa8b558f4c73dc77ab184210a56788/420/420/Hat/Png/noFilter'
    }
  ]

}
