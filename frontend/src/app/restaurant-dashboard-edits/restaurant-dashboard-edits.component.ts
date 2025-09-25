import { Component, OnInit } from '@angular/core';
import { SideMenuComponent } from '../side-menu/side-menu.component';
import { HttpClient } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CardModule } from 'primeng/card';
import { RestaurantService } from '../services/restaurant.service';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-restaurant-dashboard-edits',
  standalone: true,
  imports: [SideMenuComponent, DropdownModule, InputTextModule, ButtonModule, TableModule, ToastModule, FormsModule, CardModule, DatePipe],
  templateUrl: './restaurant-dashboard-edits.component.html',
  styleUrl: './restaurant-dashboard-edits.component.css',
  providers: [MessageService, RestaurantService]
})
export class RestaurantDashboardEditsComponent implements OnInit {
  pendingEdits: any[] = [];
  constructor(private route: ActivatedRoute, private http: HttpClient, private messageService: MessageService, private restaurantService: RestaurantService) {}
  
  restaurantUrl: any = null;
  

  ngOnInit(): void {
      this.restaurantUrl = this.route.snapshot.paramMap.get('id');
      this.loadPendingEdits(this.restaurantUrl);
      this.restaurantService.getRestaurantById(this.restaurantUrl);
  }

  loadPendingEdits(restaurantId: string) {   
    this.http.get<any[]>(`https://localhost:7084/api/EditRestaurants/${restaurantId}`)
      .subscribe({
        next:(edits) => this.pendingEdits = edits,
        error: (error) => console.error('Error loading edits: ', error)
      });
  }

  approveEdit() {
    this.messageService.add({
      severity: 'success',
      summary: 'Approved',
      detail: 'Change has been made'
    });
  }

  denyEdit() {
    this.messageService.add({
            severity: 'error',
            summary: 'Denied',
            detail: 'Change has been denied'
          });
  }
  
}
