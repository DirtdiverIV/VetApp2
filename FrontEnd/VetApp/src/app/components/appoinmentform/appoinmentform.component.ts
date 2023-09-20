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

  pets: any[] = []; // Aquí almacenarás la lista de mascotas para el select

  submitButtonDisabled = false; // Variable para habilitar/deshabilitar el botón de enviar

  ngOnInit() {
    // Aquí puedes cargar la lista de mascotas desde tu servicio petsService
    this.petsService.getAllPets().subscribe((pets: any[]) => {
      this.pets = pets;
    });
  }

  onSubmit() {
    // Antes de enviar la cita, verifica si el formulario es válido
    if (this.isFormValid()) {
      // Lógica para asignar la cita a una mascota usando appointmentsService.assignAppointmentToPet
      this.petsService.assignAppointmentToPet(this.appointment.petId, this.appointment).subscribe(
        (response) => {
          console.log('Appointment assigned to pet successfully', response);
          // Aquí puedes realizar alguna acción adicional después de asignar la cita
          this.appointmentAdded.emit(); // Emite el evento para notificar que se ha agregado una cita
        },
        (error) => {
          console.error('Error assigning appointment to pet', error);
          // Manejo de errores aquí
        }
      );
    }
  }

  isFormValid(): boolean {
    // Implementa la lógica para verificar la validez del formulario aquí
    // Por ejemplo, puedes comprobar si los campos requeridos están completos
    // y realizar otras validaciones según tus requisitos.
    return (
      this.appointment.date &&
      this.appointment.description &&
      this.appointment.petId !== null
    );
  }

  goBack() {
    // Lógica para regresar a la página anterior
    // Por ejemplo, puedes navegar atrás usando el router de Angular
    // this.router.navigate(['/ruta-anterior']);
  }
}