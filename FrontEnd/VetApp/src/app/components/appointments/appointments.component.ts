import { Component, OnInit } from '@angular/core';
import { AppointmentsService } from 'src/app/services/appointments.service';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})
export class AppointmentsComponent implements OnInit {
  apoinments: any[] = []; 

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin]
  };

  constructor(private appointmentsService: AppointmentsService) { }

  ngOnInit(): void {
    this.getAppoinments();
  }

  getAppoinments() {
    this.appointmentsService.getAllAppointments().subscribe(apoinments => {
      this.apoinments = apoinments;
    });
  }
}