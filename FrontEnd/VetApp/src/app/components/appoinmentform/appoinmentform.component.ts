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
  ) { }

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
      // Lógica para enviar la cita al servidor usando appointmentsService.createAppointment(this.appointment)
      this.appointmentsService.createAppointment(this.appointment).subscribe(
        (response) => {
          console.log('Appointment created successfully', response);
          // Aquí puedes realizar alguna acción adicional después de crear la cita
        },
        (error) => {
          console.error('Error creating appointment', error);
          // Manejo de errores aquí
        }
      );
      this.appointmentAdded.emit();
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

  onAppointmentAdded() {
    // ...
    // Luego, emite el evento para notificar a otros componentes que se ha agregado una cita
    this.appointmentAdded.emit();
  }

  goBack() {
    // Lógica para regresar a la página anterior
    // Por ejemplo, puedes navegar atrás usando el router de Angular
    // this.router.navigate(['/ruta-anterior']);
  }
}