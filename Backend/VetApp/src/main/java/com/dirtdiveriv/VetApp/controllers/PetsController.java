package com.dirtdiveriv.VetApp.controllers;

import com.dirtdiveriv.VetApp.models.Appointment;
import com.dirtdiveriv.VetApp.models.MedicalHistory;
import com.dirtdiveriv.VetApp.repositories.PetsRepository;
import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityNotFoundException;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.dirtdiveriv.VetApp.models.Pets;

import java.util.List;

@RestController
@RequestMapping("/pets")
public class PetsController {

    @PersistenceContext
    private EntityManager entityManager;

    @Autowired
    private PetsRepository petsRepository;

    @GetMapping("/{id}")
    public Pets getPetById(@PathVariable Long id) {
        Pets pet = entityManager.find(Pets.class, id);
        if (pet == null) {
            throw new EntityNotFoundException("Pet with ID " + id + " not found.");
        }
        return pet;
    }

    @GetMapping
    public List<Pets> getAllPets() {
        List<Pets> pets = petsRepository.findAll();
        return pets;
    }

    @GetMapping("/owner/{ownerId}")
    public List<Pets> getPetsByOwnerId(@PathVariable Long ownerId) {
        List<Pets> pets = petsRepository.findByOwnerId(ownerId);
        if (pets.isEmpty()) {
            throw new EntityNotFoundException("No se encontraron mascotas para el cliente con ID " + ownerId);
        }
        return pets;
    }

    @PostMapping
    @Transactional
    public Pets createPet(@RequestBody Pets pet) {
        entityManager.persist(pet);
        return pet;
    }

    @PostMapping("/{petId}/appointments")
    @Transactional
    public Appointment createAppointmentForPet(@PathVariable Long petId, @RequestBody Appointment appointment) {
        Pets pet = petsRepository.findById(petId)
                .orElseThrow(() -> new EntityNotFoundException("Pet with ID " + petId + " not found."));

        appointment.setPet(pet);

        entityManager.persist(appointment);

        return appointment;
    }

    @PostMapping("/{petId}/medicalhistories")
    @Transactional
    public MedicalHistory createMedicalHistoryForPet(@PathVariable Long petId, @RequestBody MedicalHistory medicalHistory) {
        Pets pet = petsRepository.findById(petId)
                .orElseThrow(() -> new EntityNotFoundException("Pet with ID " + petId + " not found."));

        medicalHistory.setPet(pet);
        entityManager.persist(medicalHistory);

        return medicalHistory;
    }

    @PutMapping("/{id}")
    @Transactional
    public Pets updatePet(@PathVariable Long id, @RequestBody Pets updatedPet) {
        Pets existingPet = entityManager.find(Pets.class, id);
        if (existingPet == null) {
            throw new EntityNotFoundException("Pet with ID " + id + " not found.");
        }
        existingPet.setName(updatedPet.getName());
        existingPet.setSpecies(updatedPet.getSpecies());
        existingPet.setBreed(updatedPet.getBreed());
        existingPet.setAge(updatedPet.getAge());
        entityManager.merge(existingPet);
        return existingPet;
    }

    @DeleteMapping("/{id}")
    @Transactional
    public void deletePet(@PathVariable Long id) {
        Pets pet = entityManager.find(Pets.class, id);
        if (pet == null) {
            throw new EntityNotFoundException("Pet with ID " + id + " not found.");
        }
        entityManager.remove(pet);
    }
}