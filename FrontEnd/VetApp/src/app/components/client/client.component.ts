import { Component, OnInit } from '@angular/core';
import { ClientsService } from 'src/app/services/clients.service';
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  clients!: any[]; // Esto almacenará la lista de clientes

  constructor(private clientsService: ClientsService) { }

  ngOnInit(): void {
    this.getClients(); // Llama a la función para cargar los clientes al iniciar el componente
  }

  getClients() {
    this.clientsService.getAllClients().subscribe(clients => {
      this.clients = clients;
    });
  }
}
