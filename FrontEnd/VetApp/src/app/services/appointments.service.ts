import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {
  private baseUrl = 'http://localhost:4000/appointments'; // Reemplaza con la URL correcta de tu API

  constructor(private http: HttpClient) { }

  getAllAppointments(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}`);
  }

  getAppointmentById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  getAppointmentsByClientId(clientId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/client/${clientId}`);
  }

  getAppointmentsByPetId(petId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/pet/${petId}`);
  }

  createAppointment(appointment: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}`, appointment);
  }

  updateAppointment(id: number, updatedAppointment: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${id}`, updatedAppointment);
  }

  deleteAppointment(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }
}
