import { Component } from '@angular/core';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-clientform',
  templateUrl: './clientform.component.html',
  styleUrls: ['./clientform.component.scss']
})
export class ClientformComponent {
  constructor(private clientsService: ClientsService) { }

  // Define las propiedades para almacenar los datos del formulario
  name: string = '';
  lastName: string = '';
  phoneNumber: string = '';
  mail: string = '';
  address: string = '';

  // Función para manejar el evento click del botón "Submit"
  onSubmit() {
    // Crea un objeto cliente con los datos del formulario
    const newClient = {
      name: this.name,
      lastName: this.lastName,
      phoneNumber: this.phoneNumber,
      mail: this.mail,
      address: this.address
    };

    // Llama al servicio para crear el cliente en la base de datos
    this.clientsService.createClient(newClient).subscribe(response => {
      console.log('Cliente creado con éxito', response);
      // Limpia los campos del formulario después de la creación
      this.name = '';
      this.lastName = '';
      this.phoneNumber = '';
      this.mail = '';
      this.address = '';
    }, error => {
      console.error('Error al crear el cliente', error);
    });
  }
}
