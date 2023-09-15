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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ClientComponent,
    ClientdetailComponent,
    PetsComponent,
    PetdetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
