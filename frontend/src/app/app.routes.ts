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
import { RestaurantDashboardItemEditsCheckComponent } from './restaurant-dashboard-item-edits-check/restaurant-dashboard-item-edits-check.component';
import { RestaurantDashboardItemReviewsCheckComponent } from './restaurant-dashboard-item-reviews-check/restaurant-dashboard-item-reviews-check.component';
import { RestaurantDashboardAddItemComponent } from './restaurant-dashboard-add-item/restaurant-dashboard-add-item.component';
import { RestaurantDashboardItemsSelfManageComponent } from './restaurant-dashboard-items-self-manage/restaurant-dashboard-items-self-manage.component';
import { RestaurantDashboardItemsSelfManageItemComponent } from './restaurant-dashboard-items-self-manage-item/restaurant-dashboard-items-self-manage-item.component';
import { RestaurantDashboardRestaurantSelfManageComponent } from './restaurant-dashboard-restaurant-self-manage/restaurant-dashboard-restaurant-self-manage.component';

export const routes: Routes = [
    // user paths
    {path: '', redirectTo: 'browse', pathMatch: 'full'},
    {path: 'browse', component: BrowseComponent},
    {path: 'restaurant/:id', component: RestaurantPageComponent},
    {path: 'review ', component: ReviewComponent},
    {path: 'user', component: UserPageComponent},
    {path: 'login', component: LoginComponent},
    
    // DASHBOARD
    // restaurant
    {path: 'dashboard/:id', component: RestaurantDashboardComponent},
    {path: 'dashboard/:id/edits', component: RestaurantDashboardEditsComponent},
    {path: 'dashboard/:id/reviews', component: RestaurantDashboardReviewsComponent},
    // items
    {path: 'dashboard/:id/item-edits', component: RestaurantDashboardItemEditsComponent},
    {path: 'dashboard/:id/item-edits/:id', component: RestaurantDashboardItemEditsCheckComponent},
    {path: 'dashboard/:id/item-reviews', component: RestaurantDashboardItemReviewsComponent},
    {path: 'dashboard/:id/item-reviews/:id', component: RestaurantDashboardItemReviewsCheckComponent},
    {path: 'dashboard/:id/add-item', component: RestaurantDashboardAddItemComponent},
    // self manage
    {path: 'dashboard/:id/restaurant-self-manage', component: RestaurantDashboardRestaurantSelfManageComponent},
    {path: 'dashboard/:id/items-self-manage', component: RestaurantDashboardItemsSelfManageComponent},
    {path: 'dashboard/:id/items-self-manage/:id', component: RestaurantDashboardItemsSelfManageItemComponent },
    
    {path: '**', component: PageNotFoundComponent}
    
];
