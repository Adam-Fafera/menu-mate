import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from "primeng/toast";

export enum ItemProperty {
  Name = 'Name',
  Price = 'Price',
  Calories = 'Calories',
  Fats = 'Fats',
  Carbs = 'Carbs',
  Proteins = 'Proteins',
  Allergens = 'Allergens',
  Description = 'Description'
}

@Component({
  selector: 'app-propose-item-edit',
  standalone: true,
  imports: [DropdownModule, InputTextModule, ButtonModule, FormsModule, DialogModule, ToastModule],
  templateUrl: './propose-item-edit.component.html',
  styleUrl: './propose-item-edit.component.css',
})
export class ProposeItemEditComponent {
  @Input() itemId: string | null = null;
  @Input() visible: boolean = false;
  @Output() visibleChange = new EventEmitter<boolean>();
  @Output() editProposed = new EventEmitter<void>();

  properties = Object.values(ItemProperty);
  selectedProperty: ItemProperty | null = null;
  newValue: string = '';

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
  ) {}

  proposeEdit() {
    if (!this.selectedProperty || !this.newValue || !this.itemId) {
      console.log('Validation failed:', {
            selectedProperty: this.selectedProperty,
            newValue: this.newValue,
            itemId: this.itemId
        });
        return;
    };

    const edit = {
      ItemId: this.itemId,
      PropertyName: this.selectedProperty,
      NewValue: this.newValue,
    };

    console.log("Edit: ", edit);

    this.http.post(`https://localhost:7084/api/EditItems`, edit)
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
          console.log(edit);
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
