import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientsService } from 'src/app/services/clients.service';
import { SelectedClientService } from 'src/app/services/selected-client.service';
import { AppointmentsService } from 'src/app/services/appointments.service';

@Component({
  selector: 'app-clientdetail',
  templateUrl: './clientdetail.component.html',
  styleUrls: ['./clientdetail.component.scss'],
})
export class ClientdetailComponent implements OnInit {
  client: any = {};
  appointments: any[] = [];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clientsService: ClientsService,
    private selectedClientService: SelectedClientService,
    private appointmentsService: AppointmentsService
  ) {}

  ngOnInit(): void {
    this.getClientDetail();
  }

  getClientDetail() {
    const clientId = this.route.snapshot.paramMap.get('id');
    if (clientId) {
      this.clientsService.getClientById(+clientId).subscribe((data: any) => {
        this.client = data;

        if (this.client.pets && this.client.pets.length > 0) {
          const petId = this.client.pets[0].id;
          this.getAppointmentsByPetId(petId);
        }
      });
    }
  }

  getAppointmentsByPetId(petId: number) {
    this.appointmentsService
      .getAppointmentsByPetId(petId)
      .subscribe((appointments: any[]) => {
        this.appointments = appointments;
      });
  }

  navigateToPetForm() {
    this.selectedClientService.setSelectedClient(this.client);
    this.router.navigate(['/petform']);
  }

  goBack() {
    window.history.back();
  }
}
