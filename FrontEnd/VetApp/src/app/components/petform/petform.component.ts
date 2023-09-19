import { Component, OnInit } from '@angular/core';
import { ClientsService } from 'src/app/services/clients.service';
import { PetsService } from 'src/app/services/pets.service';

@Component({
  selector: 'app-petform',
  templateUrl: './petform.component.html',
  styleUrls: ['./petform.component.scss']
})
export class PetformComponent implements OnInit { // Implementa OnInit

  constructor(
    private petsService: PetsService,
    private clientsService: ClientsService // Inyecta el servicio de clientes
  ) { }

  // Define las propiedades para almacenar los datos del formulario
  name: string = '';
  species: string = '';
  breed: string = '';
  age: string = '';
  clientId: number = -1;
  clientsList: any[] = [];


  ngOnInit(): void {
    // Llama a la función para obtener la lista de clientes
    this.clientsService.getAllClients().subscribe(clients => {
      this.clientsList = clients;
    });
  }
  onSubmit() {
    // Verifica si clientId es válido (distinto de -1)
    if (this.clientId !== -1) {
      // Crea un objeto de mascota con los datos del formulario y clientId
      const newPet = {
        name: this.name,
        species: this.species,
        breed: this.breed,
        age: this.age
      };

      // Llama al servicio para crear la mascota asociada al cliente
      this.petsService.createPetForClient(newPet, this.clientId).subscribe(response => {
        console.log('Mascota creada con éxito', response);
        // Limpia los campos del formulario después de la creación
        this.name = '';
        this.species = '';
        this.breed = '';
        this.age = '';
      }, error => {
        console.error('Error al crear la mascota', error);
      });
    } else {
      console.error('Error: Debes seleccionar un cliente válido.');
    }
  }
}
