import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';

export enum RestaurantProperty {
  Name = 'Name',
  Description = 'Description',
  Location = 'Location',
  Phone = 'Phone',
  ImagePath = 'ImagePath'
}

@Component({
  selector: 'app-propose-restaurant-edit',
  standalone: true,
  imports: [DropdownModule, InputTextModule, ButtonModule, FormsModule, DialogModule],
  templateUrl: './propose-restaurant-edit.component.html',
  styleUrl: './propose-restaurant-edit.component.css'
})
export class ProposeRestaurantEditComponent {
  @Input() restaurantId: string | null = null;
  @Input() visible: boolean = false;
  @Output() visibleChange = new EventEmitter<boolean>();
  @Output() editProposed = new EventEmitter<void>();

  properties = Object.values(RestaurantProperty);
  selectedProperty: RestaurantProperty | null = null;
  newValue: string = '';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  proposeEdit() {
    if (!this.selectedProperty || !this.newValue || !this.restaurantId) return;

    const edit = {
      restaurantId: this.restaurantId,
      propertyName: this.selectedProperty,
      newValue: this.newValue
    };

    this.http.post(`https://localhost:7084/api/EditRestaurants`, edit)
      .subscribe({
        next: () => {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Edit proposed successfully'
          });
          this.resetForm();
          this.editProposed.emit();
          this.closeDialog();
        },
        error: (error) => {
          console.error('Error:', error);
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Failed to propose edit'
          });
        }
      });
  }

  private resetForm() {
    this.selectedProperty = null;
    this.newValue = '';
  }

  closeDialog(){
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }

}
