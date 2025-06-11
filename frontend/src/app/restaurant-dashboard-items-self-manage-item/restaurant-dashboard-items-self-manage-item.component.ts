import { Component } from '@angular/core';
import { SideMenuComponent } from "../side-menu/side-menu.component";
import { IftaLabelModule } from 'primeng/iftalabel';
import { TextareaModule } from 'primeng/textarea';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { FileUpload   } from 'primeng/fileupload';
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';
import { InputNumberModule } from 'primeng/inputnumber';
import { MultiSelectModule } from 'primeng/multiselect';
import { ToastModule } from 'primeng/toast';

interface UploadEvent {
  originalEvent: Event;
  files: File[];
}

interface Alergens {
  name: string;
}

@Component({
  selector: 'app-restaurant-dashboard-items-self-manage-item',
  imports: [SideMenuComponent, IftaLabelModule, TextareaModule, CommonModule, FormsModule, InputTextModule, FileUpload, ToastModule, ButtonModule, InputNumberModule, MultiSelectModule],
  templateUrl: './restaurant-dashboard-items-self-manage-item.component.html',
  styleUrl: './restaurant-dashboard-items-self-manage-item.component.css',
  providers: [MessageService]
})
export class RestaurantDashboardItemsSelfManageItemComponent {
  name: string | undefined;
  item: any[] = [];
  alergens!: Alergens[];
  selectedAlergens!: Alergens[];
  price: number | undefined;
  cals: number | undefined;
  carbs: number | undefined;
  fats: number | undefined;
  proteins: number | undefined;


  constructor(private messageService: MessageService) {}

  onUpload(event: UploadEvent) {
        this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode' });
  }

  ngOnInit(): void {
    this.item = [{
      name : 'Sandwich',
      description : 'Some description',
    }];
    
    this.alergens = [
      {name: 'None'},
      {name: 'Cereals containing gluten'},
      {name: 'Crustaceans'},
      {name: 'Eggs'},
      {name: 'Fish'},
      {name: 'Peanuts'},
      {name: 'Soybeans'},
      {name: 'Milk'},
      {name: 'Nuts'},
      {name: 'Celery'},
      {name: 'Mustard'},
      {name: 'Sesame seeds'},
      {name: 'Sulphites'},
      {name: 'Lupin'},
      {name: 'Molluscs'},
    ];
  }

  

}
