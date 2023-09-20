import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TreatmentsService {
  private baseUrl = 'http://localhost:4000/treatments';

  constructor(private http: HttpClient) {}

  getAllTreatments(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}`);
  }

  getTreatmentById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  createTreatment(treatment: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}`, treatment);
  }

  updateTreatment(id: number, updatedTreatment: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${id}`, updatedTreatment);
  }

  deleteTreatment(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }
}
