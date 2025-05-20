import { Routes } from '@angular/router';
import { BrowseComponent } from './browse/browse.component';
import { RestaurantPageComponent } from './restaurant-page/restaurant-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReviewComponent } from './review/review.component';

export const routes: Routes = [
    {path: 'browse', component: BrowseComponent},
    {path: 'restaurant', component: RestaurantPageComponent},
    {path: 'review', component: ReviewComponent},

    // ↓↓↓↓ Add only at the end of routes, otherwise it will not read the rest of routes
    {path: '**', component: PageNotFoundComponent},
    
];
