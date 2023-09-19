import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientsService } from 'src/app/services/clients.service';
import { SelectedClientService } from 'src/app/services/selected-client.service';

@Component({
  selector: 'app-clientdetail',
  templateUrl: './clientdetail.component.html',
  styleUrls: ['./clientdetail.component.scss'],
})
export class ClientdetailComponent implements OnInit {
  client: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clientsService: ClientsService,
    private selectedClientService: SelectedClientService // Inyecta el servicio compartido
  ) {}

  ngOnInit(): void {
    this.getClientDetail();
  }

  getClientDetail() {
    const clientId = this.route.snapshot.paramMap.get('id');
    if (clientId) {
      this.clientsService.getClientById(+clientId).subscribe((data: any) => {
        this.client = data;
      });
    }
  }

  // Agrega esta función para navegar a PetformComponent y establecer el cliente seleccionado en el servicio compartido
  navigateToPetForm() {
    this.selectedClientService.setSelectedClient(this.client); // Establece el cliente seleccionado en el servicio compartido
    this.router.navigate(['/petform']);
  }
}
