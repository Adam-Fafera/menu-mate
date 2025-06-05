import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-dashboard-item-edits',
  imports: [CardModule, ButtonModule],
  templateUrl: './dashboard-item-edits.component.html',
  styleUrl: './dashboard-item-edits.component.css'
})
export class DashboardItemEditsComponent implements OnInit{

  constructor(private messageService: MessageService) {}

  changes: any[] = [];

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
    console.log('confirmed change');
  }

  rejectChange(){
    console.log('rejected change');
  }

  showSuccess() {
    this.messageService.add({severity: 'Success', summary: 'Confirmed', detail: 'You accepted the change'})
  }

  showReject() {
    this.messageService.add({severity: 'Error', summary: 'Rejected', detail: 'You rejected the change'})
  }

}
