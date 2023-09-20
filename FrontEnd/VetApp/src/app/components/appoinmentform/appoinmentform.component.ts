import { Component, EventEmitter, Output } from '@angular/core';
import { AppointmentsService } from 'src/app/services/appointments.service';
import { PetsService } from 'src/app/services/pets.service';

@Component({
  selector: 'app-appointmentform',
  templateUrl: './appoinmentform.component.html',
  styleUrls: ['./appoinmentform.component.scss']
})
export class AppointmentformComponent {
  constructor(
    private appointmentsService: AppointmentsService,
    private petsService: PetsService
  ) {}

  @Output() appointmentAdded = new EventEmitter<void>();

  appointment: any = {
    date: '',
    description: '',
    petId: null
  };

  pets: any[] = [];
  submitButtonDisabled = false;

  ngOnInit() {
    this.petsService.getAllPets().subscribe((pets: any[]) => {
      this.pets = pets;
    });
  }

  onSubmit() {
    if (this.isFormValid()) {
      this.petsService.assignAppointmentToPet(this.appointment.petId, this.appointment).subscribe(
        (response) => {
          console.log('Appointment assigned to pet successfully', response);
          this.appointmentAdded.emit();

          
          this.goBack();
        },
        (error) => {
          console.error('Error assigning appointment to pet', error);
          
        }
      );
    }
  }

  isFormValid(): boolean {
    return (
      this.appointment.date &&
      this.appointment.description &&
      this.appointment.petId !== null
    );
  }


  goBack() {
    window.history.back();
  }
}