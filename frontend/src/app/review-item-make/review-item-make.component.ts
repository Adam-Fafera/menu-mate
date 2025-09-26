import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { FloatLabelModule } from 'primeng/floatlabel';
import { RatingModule } from 'primeng/rating';
import { MessageService } from 'primeng/api';
import { HttpClient } from '@angular/common/http';
import { Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TextareaModule } from 'primeng/textarea';


@Component({
  selector: 'app-review-item-make',
  imports: [DialogModule,RatingModule, FloatLabelModule, ButtonModule, FormsModule, TextareaModule],
  templateUrl: './review-item-make.component.html',
  styleUrl: './review-item-make.component.css'
})
export class ReviewItemMakeComponent {

  @Input() visible: boolean = false;
  @Input() itemId: string | null = null;
  @Output() visibleChange = new EventEmitter<boolean>();
  
  title: string ='';
  description: string = '';
  rating: number = 0;

  constructor(public messageService: MessageService, public http: HttpClient, private route: ActivatedRoute) {}

  
  postReview() {

    const review = {
      itemId: this.itemId,
      userId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      userName: "Kiciula27",
      userImagePath: "https://innostudio.de/fileuploader/images/default-avatar.png",
      title: this.title,
      description: this.description,
      rating: this.rating 
    }

    this.http.post(`https://localhost:7084/api/ReviewItems`, review)
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
