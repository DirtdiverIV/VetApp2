import { Component, OnInit } from '@angular/core';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  clients: any[] = [];
  searchTerm: string = ''; // Variable para el término de búsqueda
  filteredClients: any[] = []; // Variable para los clientes filtrados

  constructor(private clientsService: ClientsService) { }

  ngOnInit(): void {
    this.getClients();
  }

  getClients() {
    this.clientsService.getAllClients().subscribe(clients => {
      this.clients = clients;
      this.filteredClients = clients; // Inicialmente, muestra todos los clientes sin filtrar
    });
  }

  // Función para realizar la búsqueda de clientes
  searchClients() {
    // Filtra los clientes que coincidan con el término de búsqueda
    this.filteredClients = this.clients.filter(client =>
      client.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    console.log('Searching for clients with term:', this.searchTerm);
  }
}
