import { Component, OnInit } from '@angular/core';
import { TreatmentsService } from 'src/app/services/treatments.service';

@Component({
  selector: 'app-treatments',
  templateUrl: './treatments.component.html',
  styleUrls: ['./treatments.component.scss']
})
export class TreatmentsComponent implements OnInit {
  treatments: any[] = []; 
  constructor(private treatmentsService: TreatmentsService) { }

  ngOnInit(): void {
    this.getTreatments();
  }

  getTreatments() {
    this.treatmentsService.getAllTreatments().subscribe(treatments => {
      this.treatments = treatments;
    });
  }
}