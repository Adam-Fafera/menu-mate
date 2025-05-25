import { Component, OnInit } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar'
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { FloatLabelModule } from 'primeng/floatlabel';
import { BadgeModule } from 'primeng/badge';
import { CommonModule } from '@angular/common';
import { AvatarModule } from 'primeng/avatar';
import { MenubarModule } from 'primeng/menubar';
import { DrawerModule } from 'primeng/drawer';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-top-search',
  imports: [ToolbarModule, ButtonModule, IconFieldModule, InputIconModule, FloatLabelModule, BadgeModule, CommonModule, AvatarModule, MenubarModule, DrawerModule, RouterLink],
  templateUrl: './top-search.component.html',
  styleUrl: './top-search.component.css'
})
export class TopSearchComponent{
    visible = false;
    constructor(private router : Router) {}
    
    goToUser() : void {
      this.router.navigate('/user');
    }

}
