import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentsComponent } from '../appointments.component';
import { FullCalendarModule } from '@fullcalendar/angular'; // Importa FullCalendarModule



@NgModule({
  declarations: [AppointmentsComponent],
  imports: [
    FullCalendarModule, // Agrega FullCalendarModule a tus imports
    // ...
  ],
})
export class AppointmentsModule {}