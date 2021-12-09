package com.example.springtemplate.daos;

import com.example.springtemplate.models.Applicant;
import com.example.springtemplate.models.ExperiencedApplicant;
import com.example.springtemplate.models.NewGradApplicant;
import com.example.springtemplate.repositories.ApplicantRestRepository;
import com.example.springtemplate.repositories.ExperiencedApplicantRestRepository;
import com.example.springtemplate.repositories.NewGradApplicantRestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class ExperiencedApplicantRestOrmDao {
    @Autowired
    ExperiencedApplicantRestRepository experiencedApplicantRepository;

    @PostMapping("/api/experiencedApplicants")
    public ExperiencedApplicant createApplicant(@RequestBody ExperiencedApplicant experiencedApplicant) {
        return experiencedApplicantRepository.save(experiencedApplicant);
    }

    @GetMapping("/api/experiencedApplicants")
    public List<ExperiencedApplicant> findAllExperiencedGradApplicants() {
        return (List<ExperiencedApplicant>) experiencedApplicantRepository.findAll();
    }

    @GetMapping("/api/experiencedApplicants/{experiencedApplicantId}")
    public ExperiencedApplicant findExperiencedApplicantById(
            @PathVariable("experiencedApplicantId") Integer id) {
        return experiencedApplicantRepository.findExperiencedApplicantById(id);
    }

    @PutMapping("/api/experiencedApplicants/{experiencedApplicantId}")
    public ExperiencedApplicant updateExperiencedApplicant(
            @PathVariable("experiencedApplicantId") Integer id,
            @RequestBody ExperiencedApplicant experiencedApplicantUpdates) {
        ExperiencedApplicant experiencedApplicant = experiencedApplicantRepository.findExperiencedApplicantById(id);
        experiencedApplicant.setFirstName(experiencedApplicantUpdates.getFirstName());
        experiencedApplicant.setLastName(experiencedApplicantUpdates.getLastName());
        experiencedApplicant.setEmail(experiencedApplicantUpdates.getEmail());
        experiencedApplicant.setUsername(experiencedApplicantUpdates.getUsername());
        experiencedApplicant.setPassword(experiencedApplicantUpdates.getPassword());
        experiencedApplicant.setDateOfBirth(experiencedApplicantUpdates.getDateOfBirth());
        experiencedApplicant.setWorkExperience(experiencedApplicantUpdates.getWorkExperience());

        return experiencedApplicantRepository.save(experiencedApplicant);
    }

    @DeleteMapping("/api/experiencedApplicants/{experiencedApplicantId}")
    public void deleteExperiencedApplicant(
            @PathVariable("experiencedApplicantId") Integer id) {
        experiencedApplicantRepository.deleteById(id);
    }
}
