import { Component, OnInit } from '@angular/core';
import { ClientsService } from 'src/app/services/clients.service';
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  clients: any[] = []; 
  constructor(private clientsService: ClientsService) { }

  ngOnInit(): void {
    this.getClients();
  }

  getClients() {
    this.clientsService.getAllClients().subscribe(clients => {
      this.clients = clients;
    });
  }
}
