import { Component, OnInit } from '@angular/core';
import { SideMenuComponent } from "../side-menu/side-menu.component";
import { IftaLabelModule } from 'primeng/iftalabel';
import { TextareaModule } from 'primeng/textarea';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';

interface UploadEvent {
  originalEvent: Event;
  files: File[];
}

@Component({
  selector: 'app-restaurant-dashboard-items-self-manage-item',
  imports: [SideMenuComponent, IftaLabelModule, TextareaModule, CommonModule, FormsModule, InputTextModule, FileUploadModule, ButtonModule],
  templateUrl: './restaurant-dashboard-items-self-manage-item.component.html',
  styleUrl: './restaurant-dashboard-items-self-manage-item.component.css',
  providers: [MessageService]
})
export class RestaurantDashboardItemsSelfManageItemComponent {
  name: string | undefined;

  item: any[] = [];

  constructor(private messageService: MessageService) {}

  onBasicUploadAuto(event: UploadEvent) {
      this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode' });
  }

  ngOnInit(): void {
    this.item = [{
    name : 'Sandwich',
    description : 'Some description',
  }]  
  }

  

}
