import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { IftaLabelModule } from 'primeng/iftalabel';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms'; 
import { AvatarModule } from 'primeng/avatar';


@Component({
  selector: 'app-review',
  standalone: true,
  imports: [InputTextModule, IftaLabelModule, FormsModule, RatingModule, AvatarModule],
  templateUrl: './review.component.html',
  styleUrl: './review.component.css'
})
export class ReviewComponent {

  reviews = [
    {
    reviewID : 1,
    restaurantID: 1,
    itemID : 0,
    userID : 2,
    userName: 'despaciten',
    userImg: 'https://cdnb.artstation.com/p/assets/images/images/084/668/351/large/rexygramer-hkdave.jpg?1738900862',
    reviewTitle: 'Całkiem ok',
    reviewRating: 4,
    description: 'Naprawde spoko restauracja, ok cena, super obsluga, nic tylko wracac :)',
    },
    {
      reviewID : 2,
      restaurantID: 1,
      itemID : 0,
      userID : 3,
      userName: 'Marcin',
      userImg: 'https://images.squarespace-cdn.com/content/v1/6238e52add6d246d399e9fcb/262796e7-b217-40c6-80c9-2331b41c28f3/IMG_1853.jpg',
      reviewTitle: 'TRAGEDIA',
      reviewRating: 1,
      description: 'Żadna pozycja w menu nie przystosowana dla kotów. ABSOLUTNIE NIC! Co ja mam zjeść?! ',
    }
  ];

}

