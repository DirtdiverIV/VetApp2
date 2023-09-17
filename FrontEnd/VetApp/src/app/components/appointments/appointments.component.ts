import { Component, OnInit } from '@angular/core';
import { AppointmentsService } from 'src/app/services/appointments.service';
import { CalendarOptions } from '@fullcalendar/core';
import timeGridPlugin from '@fullcalendar/timegrid';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})
export class AppointmentsComponent implements OnInit {
  appointments: any[] = [];

  calendarOptions: CalendarOptions = {
    initialView: 'timeGridWeek',
    plugins: [timeGridPlugin],
    events: [], // Inicialmente, los eventos están vacíos
    businessHours: {
      // Define las horas laborables (lunes a viernes, de 9 am a 9 pm)
      daysOfWeek: [1, 2, 3, 4, 5], // 0 = Domingo, 1 = Lunes, 2 = Martes, ..., 6 = Sábado
      startTime: '09:00', // Hora de inicio de trabajo
      endTime: '21:00'    // Hora de finalización de trabajo (9 pm)
    },
    hiddenDays: [0, 6] // Oculta Domingo (0) y Sábado (6)
  };

  constructor(private appointmentsService: AppointmentsService) {}

  ngOnInit(): void {
    this.getAppointments();
  }

  getAppointments() {
    this.appointmentsService.getAllAppointments().subscribe(appointments => {
      this.appointments = appointments;
  
      // Formatea los datos de appointments para FullCalendar
      const events = this.appointments.map(appointment => ({
        title: `${appointment.description} - ${appointment.pet.name}`, // Combina la descripción con el nombre de la mascota
        start: appointment.date,
        // Puedes agregar más propiedades si es necesario
      }));
  
      // Actualiza los eventos en las opciones del calendario
      this.calendarOptions.events = events;
    });
  }
}