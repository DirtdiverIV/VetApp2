import { Component, OnInit } from '@angular/core';
import { AppointmentsService } from 'src/app/services/appointments.service';
import { CalendarOptions } from '@fullcalendar/core';
import timeGridPlugin from '@fullcalendar/timegrid';
import bootstrap5Plugin from '@fullcalendar/bootstrap5';
import { Router } from '@angular/router';
import { EventInput } from '@fullcalendar/core';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss'],
})
export class AppointmentsComponent implements OnInit {
  appointments: any[] = [];
  calendarEvents: EventInput[] = [];

  calendarOptions: CalendarOptions = {
    timeZone: 'local',
    initialView: 'timeGridWeek',
    plugins: [timeGridPlugin, bootstrap5Plugin],
    themeSystem: 'bootstrap5',
    events: [],
    eventColor: '#8cbfbc',
    eventBackgroundColor: '#d1e7dd',
    eventBorderColor: '#bcd0c7',
    eventTextColor: '#000000',
    allDaySlot: false,
    now: new Date(),
    nowIndicator: true,
    slotMinTime: '09:00:00',
    slotMaxTime: '21:00:00',
    titleFormat: { year: 'numeric', month: 'long', day: 'numeric' },
    businessHours: {
      daysOfWeek: [1, 2, 3, 4, 5],
      startTime: '09:00',
      endTime: '21:00',
    },
    hiddenDays: [0, 6],
    eventClick: (info) => {
      if (
        info.event.extendedProps &&
        info.event.extendedProps['pet'] &&
        info.event.extendedProps['pet']['id']
      ) {
        const petId = info.event.extendedProps['pet']['id'];
        console.log('Pet ID:', petId);

        this.router.navigate(['/petdetail', petId]);
      }
    },
  };

  constructor(
    private appointmentsService: AppointmentsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAppointments();
  }

  getAppointments() {
    this.appointmentsService.getAllAppointments().subscribe((appointments) => {
      this.appointments = appointments;

      const events = this.appointments.map((appointment) => ({
        title: `${appointment.description} - ${appointment.pet.name}`,
        start: appointment.date,
        extendedProps: {
          pet: {
            id: appointment.pet.id,
          },
          id: appointment.id,
        },
      }));

      this.calendarOptions.events = events;
    });
  }
}
