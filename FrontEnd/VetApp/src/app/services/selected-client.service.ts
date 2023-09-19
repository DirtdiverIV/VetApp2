import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SelectedClientService {
  selectedClient: any;

  setSelectedClient(client: any) {
    this.selectedClient = client;
  }

  getSelectedClient() {
    return this.selectedClient;
  }
}