import { Component, EventEmitter, Input, Output} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { RatingModule } from 'primeng/rating';
import { TextareaModule } from 'primeng/textarea';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-review-restaurant-make',
  standalone: true,
  imports: [DialogModule, InputTextModule, ButtonModule, FormsModule, DialogModule, RatingModule, FloatLabelModule, TextareaModule],
  templateUrl: './review-restaurant-make.component.html',
  styleUrl: './review-restaurant-make.component.css',
})


export class ReviewRestaurantMakeComponent {
  @Input() visible: boolean = false;
  @Output() visibleChange = new EventEmitter<boolean>();
  
  title: string ='';
  description: string = '';
  rating: number = 0;

  constructor(public messageService: MessageService, public http: HttpClient, private route: ActivatedRoute) {}

  
  postReview() {
    
    const restaurantId = this.route.snapshot.paramMap.get('id')

    const review = {
      restaurantId: restaurantId,
      userId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      userName: "Kiciula27",
      userImagePath: "https://innostudio.de/fileuploader/images/default-avatar.png",
      title: this.title,
      description: this.description,
      rating: this.rating 
    }

    this.http.post(`https://localhost:7084/api/Reviews`, review)
      .subscribe({
        next: (response) => {
          console.log('Review posted successfully ', response);
          this.messageService.add({severity:'success', summary: "Success", detail:"Review posted"});
          this.closeDialog();
          this.resetForm();
        },
        error: (error) =>{
          console.error('Error posting review', error);
          this.messageService.add({severity:'error', summary: "Error", detail:"Failed to post review"});
        }
      })

  }

  closeDialog() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }

  resetForm() {
    this.title = '';
    this.description = '';
    this.rating = 0;
  }

}
