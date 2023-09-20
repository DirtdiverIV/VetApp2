import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PetsService } from 'src/app/services/pets.service';

@Component({
  selector: 'app-medhistoryform',
  templateUrl: './medhistoryform.component.html',
  styleUrls: ['./medhistoryform.component.scss'],
})
export class MedhistoryformComponent {
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private petsService: PetsService
  ) {}

  @Output() medHistoryAdded = new EventEmitter<void>();

  medHistoryForm: FormGroup | null = null;

  medHistory: any = {
    date: '',
    description: '',
    petId: null,
  };

  pets: any[] = [];
  submitButtonDisabled = false;

  ngOnInit() {
    this.medHistoryForm = this.formBuilder.group({
      description: ['', Validators.required],
    });

    this.petsService.getAllPets().subscribe((pets: any[]) => {
      this.pets = pets;
    });
  }

  onSubmit() {
    if (this.isFormValid()) {
      this.petsService
        .createMedicalHistoryForPet(this.medHistory.petId, this.medHistory)
        .subscribe(
          (response) => {
            console.log('Medical history created successfully', response);
            this.medHistoryAdded.emit();

            this.goBack();
          },
          (error) => {
            console.error('Error creating medical history', error);
          }
        );
    }
  }

  isFormValid(): boolean {
    return this.medHistory.description && this.medHistory.petId !== null;
  }

  goBack() {
    window.history.back();
  }
}
