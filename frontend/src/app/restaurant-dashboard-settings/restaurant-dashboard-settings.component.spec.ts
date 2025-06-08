import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantDashboardSettingsComponent } from './restaurant-dashboard-settings.component';

describe('RestaurantDashboardSettingsComponent', () => {
  let component: RestaurantDashboardSettingsComponent;
  let fixture: ComponentFixture<RestaurantDashboardSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestaurantDashboardSettingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantDashboardSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
