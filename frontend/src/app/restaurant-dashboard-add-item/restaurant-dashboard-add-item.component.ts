import { Component, OnInit } from '@angular/core';
import { SideMenuComponent } from '../side-menu/side-menu.component';
import { IftaLabelModule } from 'primeng/iftalabel';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { TextareaModule } from 'primeng/textarea';

interface Alergens {
  name: string;
}

@Component({
  selector: 'app-restaurant-dashboard-add-item',
  standalone: true,
  imports: [SideMenuComponent, IftaLabelModule, MultiSelectModule, InputNumberModule, InputTextModule, ButtonModule, FormsModule, TextareaModule],
  templateUrl: './restaurant-dashboard-add-item.component.html',
  styleUrl: './restaurant-dashboard-add-item.component.css'
})
export class RestaurantDashboardAddItemComponent implements OnInit{

  name!: string ;
  price!: number;
  description!: string;
  alergens!: Alergens[];
  selectedAlergens!: Alergens[];
  cals: number | undefined;
  carbs: number | undefined;
  fats: number | undefined;
  proteins: number | undefined;

  ngOnInit(): void {
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
