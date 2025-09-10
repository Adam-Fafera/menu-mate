import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-dashboard-item-edits',
  imports: [CardModule, ButtonModule, ToastModule ],
  templateUrl: './dashboard-item-edits.component.html',
  styleUrl: './dashboard-item-edits.component.css',
  providers: [MessageService],
})
export class DashboardItemEditsComponent implements OnInit{

  changes: any[] = [];

  constructor(private messageService : MessageService) {}

  ngOnInit(): void {
    
    this.changes = [
      {
        id: 1,
        restaurantID: 1,
        itemID: 1,
        field: 'Price',
        now: '15.5',
        new: '16.99',
      },
      {
        id: 2,
        restaurantID: 1,
        itemID: 1,
        field: 'Name',
        now: 'Sandwich',
        new: 'Teriyaki Sandwich',
      },
      {
        id: 3,
        restaurantID: 1,
        itemID: 1,
        field: 'Description',
        now: 'Really tasty chicken teriyaki sandwich',
        new: 'Really super ultra mega tasty chicken teriyaki sandwich',
      }
    ];

  }


  confirmChange() {
    console.log('confirmed');
    this.messageService.add({severity: 'success', summary: 'Confirmed', detail: 'You accepted the change'})
  }

  rejectChange() {
    console.log('rejected');
    this.messageService.add({severity: 'error', summary: 'Rejected', detail: 'You rejected the change'})
  }

}
