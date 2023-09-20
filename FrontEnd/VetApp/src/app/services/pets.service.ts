import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PetsService {
  private baseUrl = 'http://localhost:4000/pets';
  constructor(private http: HttpClient) {}

  getAllPets(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}`);
  }

  getPetById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  createPet(pet: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}`, pet);
  }

  updatePet(id: number, updatedPet: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${id}`, updatedPet);
  }

  deletePet(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }

  getMedicalHistoriesByPetId(id: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/${id}/medicalHistories`);
  }

  createPetForClient(pet: any, clientId: number): Observable<any> {
    const petWithClient = { ...pet, clientId };
    return this.http.post<any>(`${this.baseUrl}`, petWithClient);
  }

  assignAppointmentToPet(petId: number, appointment: any): Observable<any> {
    const url = `${this.baseUrl}/${petId}/appointments`;
    return this.http.post<any>(url, appointment);
  }

  createMedicalHistoryForPet(
    petId: number,
    medicalHistory: any
  ): Observable<any> {
    return this.http.post<any>(
      `${this.baseUrl}/${petId}/medicalhistories`,
      medicalHistory
    );
  }
}
