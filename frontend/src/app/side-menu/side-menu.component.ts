import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { MenuModule } from 'primeng/menu';

@Component({
  selector: 'app-side-menu',
  imports: [MenuModule, AvatarModule],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent implements OnInit{

  items : MenuItem[] | undefined;
  options : MenuItem[] | undefined;
  constructor(private router: Router) {}

  ngOnInit(){
    this.items = [
      
      {
        separator:true
        
      },
    
      {
        label: 'Restaurant',
        items: [
          {label: 'Home', icon:'pi pi-home', command : () => {this.navigateHome()}},
          {label: 'Edits', icon:'pi pi-file-edit', command : () => {this.navigateEdits()} },
          {label:'Reviews', icon:'pi pi-star', badge:'3', command : () => {this.navigateReviews()}},
           
        ]
      },
      {
        label: 'Menu',
        items: [
          {label: 'Item edits', icon:'pi pi-file-edit', command : () => {this.navigateItemEdits()}},
          {label:'Item reviews', icon:'pi pi-star', badge:'2', command : () => {this.navigateItemReviews()}}, 
        ]
      },
      {
        label: 'Create',
        items: [
          {label: 'Add item', icon: 'pi pi-plus', command: () => {this.navigateAddItem()}}
        ]
      }
    ];

    this.options = [
      {label:'Sign out', icon:'pi pi-sign-out', command : () => {
        this.signOut();
      }
     },

    ];

    
  }

  navigateHome(){
    this.router.navigate(['dashboard/1']);
  }
  
  navigateEdits(){
    this.router.navigate(['dashboard/1/edits']);
  }
  
  navigateReviews(){
    this.router.navigate(['dashboard/1/reviews']);
  }
  
  navigateItemEdits(){
    this.router.navigate(['dashboard/1/item-edits']);
  }
  
  navigateItemReviews(){
    this.router.navigate(['dashboard/1/item-reviews']);
  }

  navigateAddItem(){
    this.router.navigate(['dashboard/1/add-item']);
  }

  signOut() {
  this.router.navigate(['login']);
  }

  

}
