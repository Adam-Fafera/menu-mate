import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RatingServiceService {
  private apiUrl = 'https://localhost:7084/api';

  constructor(private http: HttpClient) {}

  getReviews(restaurantId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/Reviews/${restaurantId}`)
  }

  getRestaurantRating(restaurantId: string): Observable<number> {
    return this.http.get<any[]>(`${this.apiUrl}/Reviews/${restaurantId}`).pipe(
      map(reviews => {
        if (!reviews || reviews.length === 0) return 0;
        const total = reviews.reduce((sum, review) => sum + review.rating, 0);
        return total / reviews.length;
      })
    );
  }

  countRestaurantReviews(restaurantId: string): Observable<number> {
    return this.http.get<any[]>(`${this.apiUrl}/Reviews/${restaurantId}`).pipe(
      map(reviews => reviews.length)
    )
  }
  
}
