import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientdetailComponent } from './components/clientdetail/clientdetail.component';
import { PetdetailComponent } from './components/petdetail/petdetail.component';

const routes: Routes = [
  { path: 'clientdetail/:id', component: ClientdetailComponent},{
    path: 'petdetail/:id', component: PetdetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
