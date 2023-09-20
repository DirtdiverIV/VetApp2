import { Component, OnInit } from '@angular/core';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss'],
})
export class ClientComponent implements OnInit {
  clients: any[] = [];
  searchTerm: string = '';
  filteredClients: any[] = [];

  constructor(private clientsService: ClientsService) {}

  ngOnInit(): void {
    this.getClients();
  }

  getClients() {
    this.clientsService.getAllClients().subscribe((clients) => {
      this.clients = clients;
      this.filteredClients = clients;
    });
  }

  searchClients() {
    this.filteredClients = this.clients.filter((client) =>
      client.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    console.log('Searching for clients with term:', this.searchTerm);
  }

  deleteClient(clientId: number) {
    if (confirm('¿Seguro que desea eliminar este cliente?')) {
      this.clientsService.deleteClient(clientId).subscribe(
        () => {
          console.log('Cliente eliminado con éxito');

          this.getClients();
        },
        (error) => {
          console.error('Error al eliminar el cliente', error);
        }
      );
    }
  }
}
