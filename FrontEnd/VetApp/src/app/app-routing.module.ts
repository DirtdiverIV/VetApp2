import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientdetailComponent } from './components/clientdetail/clientdetail.component';
import { PetdetailComponent } from './components/petdetail/petdetail.component';
import { ClientComponent } from './components/client/client.component';
import { PetsComponent } from './components/pets/pets.component';
import { TreatmentsComponent } from './components/treatments/treatments.component';

const routes: Routes = [
  { path: 'clientdetail/:id', component: ClientdetailComponent},
  { path: 'petdetail/:id', component: PetdetailComponent},
    {path: 'clients', component: ClientComponent },
    {path: 'pets', component: PetsComponent },
    {path: 'treatments', component: TreatmentsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
