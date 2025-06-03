import { Routes } from '@angular/router';
import { BrowseComponent } from './browse/browse.component';
import { RestaurantPageComponent } from './restaurant-page/restaurant-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReviewComponent } from './review/review.component';
import { UserPageComponent } from './user-page/user-page.component';
import { LoginComponent } from './login/login.component';
import { RestaurantDashboardComponent } from './restaurant-dashboard/restaurant-dashboard.component';
import { RestaurantDashboardEditsComponent } from './restaurant-dashboard-edits/restaurant-dashboard-edits.component';
import { RestaurantDashboardReviewsComponent } from './restaurant-dashboard-reviews/restaurant-dashboard-reviews.component';
import { RestaurantDashboardItemReviewsComponent } from './restaurant-dashboard-item-reviews/restaurant-dashboard-item-reviews.component';
import { RestaurantDashboardItemEditsComponent } from './restaurant-dashboard-item-edits/restaurant-dashboard-item-edits.component';

export const routes: Routes = [
    // user paths
    {path: '', redirectTo: 'browse', pathMatch: 'full'},
    {path: 'browse', component: BrowseComponent},
    {path: 'restaurant/:id', component: RestaurantPageComponent},
    {path: 'review ', component: ReviewComponent},
    {path: 'user', component: UserPageComponent},
    {path: 'login', component: LoginComponent},
    
    // dashboard paths
    {path: 'dashboard/:id', component: RestaurantDashboardComponent},
    {path: 'dashboard/:id/edits', component: RestaurantDashboardEditsComponent},
    {path: 'dashboard/:id/reviews', component: RestaurantDashboardReviewsComponent},
    {path: 'dashboard/:id/item-edits', component: RestaurantDashboardItemEditsComponent},
    {path: 'dashboard/:id/item-reviews', component: RestaurantDashboardItemReviewsComponent},

    
    {path: '**', component: PageNotFoundComponent},
    
];
