import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientdetailComponent } from './components/clientdetail/clientdetail.component';
import { PetdetailComponent } from './components/petdetail/petdetail.component';
import { ClientComponent } from './components/client/client.component';
import { PetsComponent } from './components/pets/pets.component';
import { TreatmentsComponent } from './components/treatments/treatments.component';
import { AppointmentsComponent } from './components/appointments/appointments.component';
import { ClientformComponent } from './components/clientform/clientform.component';
import { PetformComponent } from './components/petform/petform.component';

const routes: Routes = [
  { path: 'clientdetail/:id', component: ClientdetailComponent},
  { path: 'petdetail/:id', component: PetdetailComponent},
    {path: 'clients', component: ClientComponent },
    {path: 'pets', component: PetsComponent },
    {path: 'treatments', component: TreatmentsComponent},
    {path: 'appointments', component: AppointmentsComponent},
    { path: 'clientform', component: ClientformComponent },
    { path: 'petform', component: PetformComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
