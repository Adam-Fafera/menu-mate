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

  constructor(private router : Router ) {}

  ngOnInit(){
    this.items = [
      {label: 'Home', icon:'pi pi-home'},
      {label: 'Edits', icon:'pi pi-file-edit'},
      {label:'Reviews', icon:'pi pi-star', badge:'3'},
      {label: 'Item edits', icon:'pi pi-file-edit'},
      {label:'Item reviews', icon:'pi pi-star', badge:'2'},
    ];

    this.options = [
      {label:'Sign out', icon:'pi pi-sign-out', command: () => {this.signOut()} },

    ];
  }

  signOut() {
    this.router.navigate(['/login']);
  }


}
