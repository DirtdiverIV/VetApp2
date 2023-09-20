import { Component, OnInit } from '@angular/core';
import { PetsService } from 'src/app/services/pets.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss']
})
export class PetsComponent implements OnInit {
  pets: any[] = [];
  searchTerm: string = ''; // Variable para el término de búsqueda
  filteredPets: any[] = []; // Variable para las mascotas filtradas

  constructor(private petsService: PetsService) { }

  ngOnInit(): void {
    this.getPets();
  }

  getPets() {
    this.petsService.getAllPets().subscribe(pets => {
      this.pets = pets;
      this.filteredPets = pets; // Inicialmente, muestra todas las mascotas sin filtrar
    });
  }

  // Función para realizar la búsqueda de mascotas
  searchPets() {
    // Filtra las mascotas que coincidan con el término de búsqueda
    this.filteredPets = this.pets.filter(pet =>
      pet.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    console.log('Searching for pets with term:', this.searchTerm);
  }
}