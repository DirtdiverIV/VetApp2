import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  private baseUrl = 'http://localhost:4000/clients';

  constructor(private http: HttpClient) { }

  getAllClients(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}`);
  }

  getClientById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  getClientDetail(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}/detail`);
  }

  getClientPets(id: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/${id}/pets`);
  }

  getClientPayments(id: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/${id}/payments`);
  }

  createClient(client: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}`, client);
  }

  updateClient(id: number, updatedClient: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${id}`, updatedClient);
  }

  deleteClient(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }
}
