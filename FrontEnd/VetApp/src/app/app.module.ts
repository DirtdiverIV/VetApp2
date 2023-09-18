import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ClientComponent } from './components/client/client.component';
import { ClientdetailComponent } from './components/clientdetail/clientdetail.component';
import { PetsComponent } from './components/pets/pets.component';
import { PetdetailComponent } from './components/petdetail/petdetail.component';
import { TreatmentsComponent } from './components/treatments/treatments.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { AppointmentsComponent } from './components/appointments/appointments.component';
import { RouterModule } from '@angular/router';
import { ClientformComponent } from './components/clientform/clientform.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ClientComponent,
    ClientdetailComponent,
    PetsComponent,
    PetdetailComponent,
    TreatmentsComponent,
    AppointmentsComponent,
    ClientformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FullCalendarModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
