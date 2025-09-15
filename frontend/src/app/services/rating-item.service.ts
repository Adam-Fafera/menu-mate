import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RatingItemService {
  private apiUrl = 'https://localhost:7084/api';

  constructor(private http: HttpClient) {}

  getReviews(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/ReviewItems`)
  }

  getItemRating(itemId: string): Observable<number> {
    return this.http.get<any[]>(`${this.apiUrl}/Reviews/${itemId}`).pipe(
      map(reviews => {
        if (!reviews || reviews.length === 0) return 0;
        const total = reviews.reduce((sum, review) => sum + review.rating, 0);
        return total / reviews.length;
      })
    );
  }

  countRestaurantReviews(itemId: string): Observable<number> {
    return this.http.get<any[]>(`${this.apiUrl}/ReviewItems/${itemId}`).pipe(
      map(reviews => reviews.length)
    )
  }
  
}
