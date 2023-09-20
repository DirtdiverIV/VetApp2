import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-clientform',
  templateUrl: './clientform.component.html',
  styleUrls: ['./clientform.component.scss'],
})
export class ClientformComponent {
  constructor(private clientsService: ClientsService, private router: Router) {}

  name: string = '';
  lastName: string = '';
  phoneNumber: string = '';
  mail: string = '';
  address: string = '';

  onSubmit() {
    const newClient = {
      name: this.name,
      lastName: this.lastName,
      phoneNumber: this.phoneNumber,
      mail: this.mail,
      address: this.address,
    };

    this.clientsService.createClient(newClient).subscribe(
      (response) => {
        console.log('Cliente creado con éxito', response);
        this.name = '';
        this.lastName = '';
        this.phoneNumber = '';
        this.mail = '';
        this.address = '';
        this.router.navigate(['/clients']);
      },
      (error) => {
        console.error('Error al crear el cliente', error);
      }
    );
  }

  goBack() {
    window.history.back();
  }
}
