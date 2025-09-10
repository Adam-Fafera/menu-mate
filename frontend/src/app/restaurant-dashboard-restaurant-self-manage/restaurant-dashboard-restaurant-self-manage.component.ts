import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { FileUploadModule } from 'primeng/fileupload';
import { IftaLabel } from 'primeng/iftalabel';
import { SideMenuComponent } from '../side-menu/side-menu.component';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { MultiSelectModule } from 'primeng/multiselect';

@Component({
  selector: 'app-restaurant-dashboard-restaurant-self-manage',
  imports: [IftaLabel, FormsModule, FileUploadModule, SideMenuComponent, ButtonModule, ToastModule, ConfirmDialogModule, InputMaskModule,
            InputTextModule, TextareaModule, MultiSelectModule],
  standalone:true,
  templateUrl: './restaurant-dashboard-restaurant-self-manage.component.html',
  styleUrl: './restaurant-dashboard-restaurant-self-manage.component.css',
  providers: [ConfirmationService, MessageService]
})

export class RestaurantDashboardRestaurantSelfManageComponent implements OnInit {

    name: string | undefined;
    description: string | undefined;
    phone: string | undefined;
    location: string | undefined;
    cuisines: any[] | undefined;
    uploadedFiles: any[] = [];
    selectedCuisine: string | undefined;
  
    constructor(private confirmationService: ConfirmationService, private messageService: MessageService) {}
  
    ngOnInit(): void {
        this.cuisines = [
        'Fast Food',
        'Pizza',
        'Burgers',
        'Sushi',
        'Italian',
        'Asian',
        'American',
        'Soup',
        'Indian',
        'Desserts',
        'Japanese',
        'Comfort Food'
        ];
    }

    confirm(event: Event) {
        this.confirmationService.confirm({
            target: event.target as EventTarget,
            message: 'Are you sure that you want to proceed?',
            header: 'Confirmation',
            closable: true,
            closeOnEscape: true,
            icon: 'pi pi-exclamation-triangle',
            rejectButtonProps: {
                label: 'Cancel',
                severity: 'secondary',
                outlined: true,
            },
            acceptButtonProps: {
                label: 'Save',
            },
            accept: () => {
                this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have updated the restaurants info' });
            }
        });
    }
    
    cancel() {}
  

}
