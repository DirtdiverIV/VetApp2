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
    events: [] // Inicialmente, los eventos están vacíos
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
        title: appointment.description,
        start: appointment.date,
        // Puedes agregar más propiedades si es necesario
      }));

      // Actualiza los eventos en las opciones del calendario
      this.calendarOptions.events = events;
    });
  }
}