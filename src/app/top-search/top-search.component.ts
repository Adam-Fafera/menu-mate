import { Component, OnInit } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar'
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield'
import { InputIconModule } from 'primeng/inputicon'
import { FloatLabelModule } from 'primeng/floatlabel'
import { BadgeModule } from 'primeng/badge'
import { CommonModule } from '@angular/common';
import { MenuItem } from 'primeng/api'
import { AvatarModule } from 'primeng/avatar'
import { MenubarModule } from 'primeng/menubar'

@Component({
  selector: 'app-top-search',
  imports: [ToolbarModule, ButtonModule, IconFieldModule, InputIconModule, FloatLabelModule, BadgeModule, CommonModule, AvatarModule, MenubarModule],
  templateUrl: './top-search.component.html',
  styleUrl: './top-search.component.css'
})
export class TopSearchComponent implements OnInit {
  items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                label: 'Router',
                icon: 'pi pi-palette',
                items: [
                    {
                        label: 'Browse',
                        route: '/browse'
                    },
                    {
                        label: 'Not Found',
                        route: '/404'
                    }
                ]
            },
          ]
    };

}
