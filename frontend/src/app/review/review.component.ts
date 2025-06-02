import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { IftaLabelModule } from 'primeng/iftalabel';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [InputTextModule, IftaLabelModule, FormsModule, RatingModule],
  templateUrl: './review.component.html',
  styleUrl: './review.component.css'
})
export class ReviewComponent {
  value: number  = 4;
}

