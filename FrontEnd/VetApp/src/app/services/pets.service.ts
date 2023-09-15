import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetsService {
  private baseUrl = 'http://localhost:4000/pets'; // Ajusta la URL base según la ubicación de tu API de mascotas

  constructor(private http: HttpClient) { }

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

  // Método para obtener las historias médicas de una mascota por su ID
  getMedicalHistoriesByPetId(id: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/${id}/medicalHistories`);
  }
}