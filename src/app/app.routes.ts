import { Routes } from '@angular/router';
import { BrowseComponent } from './browse/browse.component';
import { RestaurantPageComponent } from './restaurant-page/restaurant-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReviewComponent } from './review/review.component';
import { UserPageComponent } from './user-page/user-page.component';
import { LoginComponent } from './login/login.component';
import { RestaurantDashboardComponent } from './restaurant-dashboard/restaurant-dashboard.component';

export const routes: Routes = [
    {path: 'browse', component: BrowseComponent},
    {path: 'restaurant/:id', component: RestaurantPageComponent},
    {path: 'review ', component: ReviewComponent},
    {path: 'user', component: UserPageComponent},
    {path: 'login', component: LoginComponent},
    {path: 'dashboard', component: RestaurantDashboardComponent},
    
    {path: '', redirectTo: 'browse', pathMatch: 'full'},
    {path: '**', component: PageNotFoundComponent},
    
];
