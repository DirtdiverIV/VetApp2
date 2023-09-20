import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientsService } from 'src/app/services/clients.service';
import { SelectedClientService } from 'src/app/services/selected-client.service';
import { AppointmentsService } from 'src/app/services/appointments.service'; // Importa el servicio de appointments

@Component({
  selector: 'app-clientdetail',
  templateUrl: './clientdetail.component.html',
  styleUrls: ['./clientdetail.component.scss'],
})
export class ClientdetailComponent implements OnInit {
  client: any = {};
  appointments: any[] = []; // Declara una variable para almacenar los appointments

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clientsService: ClientsService,
    private selectedClientService: SelectedClientService,
    private appointmentsService: AppointmentsService // Inyecta el servicio de appointments
  ) {}

  ngOnInit(): void {
    this.getClientDetail();
  }

  getClientDetail() {
    const clientId = this.route.snapshot.paramMap.get('id');
    if (clientId) {
      this.clientsService.getClientById(+clientId).subscribe((data: any) => {
        this.client = data;

        // Después de obtener los datos del cliente, obtén los appointments por el ID de la mascota
        if (this.client.pets && this.client.pets.length > 0) {
          const petId = this.client.pets[0].id; // Obtén el ID de la primera mascota (puedes ajustarlo según tus necesidades)
          this.getAppointmentsByPetId(petId);
        }
      });
    }
  }

  getAppointmentsByPetId(petId: number) {
    this.appointmentsService.getAppointmentsByPetId(petId).subscribe((appointments: any[]) => {
      this.appointments = appointments;
    });
  }

  // Agrega esta función para navegar a PetformComponent y establecer el cliente seleccionado en el servicio compartido
  navigateToPetForm() {
    this.selectedClientService.setSelectedClient(this.client); // Establece el cliente seleccionado en el servicio compartido
    this.router.navigate(['/petform']);
  }

  goBack() {
    window.history.back();
  }
}
