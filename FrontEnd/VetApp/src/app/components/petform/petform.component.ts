import { Component, OnInit } from '@angular/core';
import { ClientsService } from 'src/app/services/clients.service';
import { PetsService } from 'src/app/services/pets.service';
import { SelectedClientService } from 'src/app/services/selected-client.service'; // Importa el servicio compartido

@Component({
  selector: 'app-petform',
  templateUrl: './petform.component.html',
  styleUrls: ['./petform.component.scss'],
})
export class PetformComponent implements OnInit {
  submitButtonDisabled: boolean = true;
  selectedClient: any;

  constructor(
    private petsService: PetsService,
    private clientsService: ClientsService,
    private selectedClientService: SelectedClientService // Inyecta el servicio compartido
  ) {}

  name: string = '';
  species: string = '';
  breed: string = '';
  age: string = '';
  clientsList: any[] = [];

  ngOnInit(): void {
    // Obtén el cliente seleccionado del servicio compartido
    this.selectedClient = this.selectedClientService.getSelectedClient();
    
    if (this.selectedClient) {
      // Habilita el botón de envío cuando el cliente se haya cargado
      this.submitButtonDisabled = false;
    }

    // Llama a la función para obtener la lista de clientes (si es necesario)
    this.clientsService.getAllClients().subscribe((clients) => {
      this.clientsList = clients;
    });
  }

  onSubmit() {
    // Verifica si el cliente en el contexto de ClientdetailComponent es válido
    if (this.selectedClient) {
      // El cliente existe en el contexto de ClientdetailComponent, procede a crear la mascota
      const newPet = {
        name: this.name,
        species: this.species,
        breed: this.breed,
        age: this.age,
      };
  
      // Llama al servicio para crear la mascota asociada al cliente
      this.clientsService.addPetToClient(newPet, this.selectedClient.id).subscribe(
        (response) => {
          console.log('Mascota creada con éxito', response);
          // Limpia los campos del formulario después de la creación
          this.name = '';
          this.species = '';
          this.breed = '';
          this.age = '';
        },
        (error) => {
          console.error('Error al crear la mascota', error);
        }
      );
    } else {
      console.error(
        'Error: Cliente no encontrado en el contexto de ClientdetailComponent.'
      );
    }
  }
}
