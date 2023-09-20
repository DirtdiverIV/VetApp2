import { Component, OnInit } from '@angular/core';
import { ClientsService } from 'src/app/services/clients.service';
import { PetsService } from 'src/app/services/pets.service';
import { SelectedClientService } from 'src/app/services/selected-client.service';

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
    private selectedClientService: SelectedClientService
  ) {}

  name: string = '';
  species: string = '';
  breed: string = '';
  age: string = '';
  clientsList: any[] = [];

  ngOnInit(): void {
    this.selectedClient = this.selectedClientService.getSelectedClient();

    if (this.selectedClient) {
      this.submitButtonDisabled = false;
    }

    this.clientsService.getAllClients().subscribe((clients) => {
      this.clientsList = clients;
    });
  }

  goBack() {
    window.history.back();
  }

  onSubmit() {
    if (this.selectedClient) {
      const newPet = {
        name: this.name,
        species: this.species,
        breed: this.breed,
        age: this.age,
      };

      this.clientsService
        .addPetToClient(newPet, this.selectedClient.id)
        .subscribe(
          (response) => {
            console.log('Mascota creada con éxito', response);
            this.name = '';
            this.species = '';
            this.breed = '';
            this.age = '';

            this.goBack();
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
