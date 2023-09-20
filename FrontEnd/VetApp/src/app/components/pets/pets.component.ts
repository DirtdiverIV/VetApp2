import { Component, OnInit } from '@angular/core';
import { PetsService } from 'src/app/services/pets.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss'],
})
export class PetsComponent implements OnInit {
  pets: any[] = [];
  searchTerm: string = '';
  filteredPets: any[] = [];
  constructor(private petsService: PetsService) {}

  ngOnInit(): void {
    this.getPets();
  }

  getPets() {
    this.petsService.getAllPets().subscribe((pets) => {
      this.pets = pets;
      this.filteredPets = pets;
    });
  }

  searchPets() {
    this.filteredPets = this.pets.filter((pet) =>
      pet.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    console.log('Searching for pets with term:', this.searchTerm);
  }

  deletePet(petId: number) {
    if (confirm('¿Seguro que desea eliminar esta mascota?')) {
      this.petsService.deletePet(petId).subscribe(
        () => {
          console.log('Mascota eliminada con éxito');

          this.getPets();
        },
        (error) => {
          console.error('Error al eliminar la mascota', error);
        }
      );
    }
  }
}
