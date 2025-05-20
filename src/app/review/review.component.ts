import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { IftaLabelModule } from 'primeng/iftalabel';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [InputTextModule, IftaLabelModule, FormsModule ],
  templateUrl: './review.component.html',
  styleUrl: './review.component.css'
})
export class ReviewComponent {
  value: string  = '';
}

