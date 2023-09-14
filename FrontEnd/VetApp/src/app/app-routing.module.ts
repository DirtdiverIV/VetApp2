import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientdetailComponent } from './components/clientdetail/clientdetail.component';

const routes: Routes = [
  { path: 'clientdetail/:id', component: ClientdetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
