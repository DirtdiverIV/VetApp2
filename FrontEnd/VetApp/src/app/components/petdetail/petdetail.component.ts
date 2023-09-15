import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PetsService } from 'src/app/services/pets.service';

@Component({
  selector: 'app-petdetail',
  templateUrl: './petdetail.component.html',
  styleUrls: ['./petdetail.component.scss']
})
export class PetdetailComponent implements OnInit {
  pet: any = {};

  constructor(private route: ActivatedRoute, private petsService: PetsService) { }

  ngOnInit(): void {
    this.getPetDetail();
  }

  getPetDetail() {
    const petId = this.route.snapshot.paramMap.get('id');
    if (petId) {
      this.petsService.getPetById(+petId).subscribe((data: any) => {
        this.pet = data;
      });
    }
  }
}