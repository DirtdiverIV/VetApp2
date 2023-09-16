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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ClientComponent,
    ClientdetailComponent,
    PetsComponent,
    PetdetailComponent,
    TreatmentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FullCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
