import { Routes } from '@angular/router';
import { BrowseComponent } from './browse/browse.component';
import { RestaurantCardComponent } from './restaurant-card/restaurant-card.component';
import { RestaurantPageComponent } from './restaurant-page/restaurant-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    {path: 'browse', component: BrowseComponent},
    {path: 'restaurant', component: RestaurantPageComponent},
    {path: '**', component: PageNotFoundComponent},
];
