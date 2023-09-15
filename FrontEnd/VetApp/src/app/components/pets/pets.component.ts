import { Component, OnInit } from '@angular/core';
import { PetsService } from 'src/app/services/pets.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss']
})
export class PetsComponent implements OnInit {
  pets: any[] = []; 
  constructor(private petsService: PetsService) { }

  ngOnInit(): void {
    this.getPets();
  }

  getPets() {
    this.petsService.getAllPets().subscribe(pets => {
      this.pets = pets;
    });
  }
}