import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  private apiUrl = 'https://localhost:7084/api';

  constructor(private http: HttpClient) {}

  getRestaurants() {
    return this.http.get<any[]>(`${this.apiUrl}/Restaurants`)
  }

  getRestaurantById(restaurantId : string) : Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/Restaurants/${restaurantId}`)
  }
  
}
