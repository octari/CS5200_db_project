package com.example.springtemplate.daos;

import com.example.springtemplate.models.Applicant;
import com.example.springtemplate.models.NewGradApplicant;
import com.example.springtemplate.repositories.ApplicantRestRepository;
import com.example.springtemplate.repositories.NewGradApplicantRestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class NewGradApplicantRestOrmDao {
    @Autowired
    NewGradApplicantRestRepository newGradApplicantRepository;

    @PostMapping("/api/newGradApplicants")
    public NewGradApplicant createApplicant(@RequestBody NewGradApplicant newGradApplicant) {
        return newGradApplicantRepository.save(newGradApplicant);
    }

    @GetMapping("/api/newGradApplicants")
    public List<NewGradApplicant> findAllNewGradApplicants() {
        return (List<NewGradApplicant>) newGradApplicantRepository.findAll();
    }

    @GetMapping("/api/newGradApplicants/{newGradApplicantId}")
    public NewGradApplicant findNewGradApplicantById(
            @PathVariable("newGradApplicantId") Integer id) {
        return newGradApplicantRepository.findNewGradApplicantById(id);
    }

    @PutMapping("/api/newGradApplicants/{newGradApplicantId}")
    public NewGradApplicant updateNewGradApplicant(
            @PathVariable("newGradApplicantId") Integer id,
            @RequestBody NewGradApplicant newGradApplicantUpdates) {
        NewGradApplicant newGradApplicant = newGradApplicantRepository.findNewGradApplicantById(id);
        newGradApplicant.setFirstName(newGradApplicantUpdates.getFirstName());
        newGradApplicant.setLastName(newGradApplicantUpdates.getLastName());
        newGradApplicant.setEmail(newGradApplicantUpdates.getEmail());
        newGradApplicant.setRecruiterId(newGradApplicantUpdates.getRecruiterId());
        newGradApplicant.setDegree(newGradApplicantUpdates.getDegree());
        newGradApplicant.setInternshipCoop(newGradApplicantUpdates.getInternshipCoop());

        return newGradApplicantRepository.save(newGradApplicant);
    }

    @DeleteMapping("/api/newGradApplicants/{newGradApplicantId}")
    public void deleteNewGradApplicant(
            @PathVariable("newGradApplicantId") Integer id) {
        newGradApplicantRepository.deleteById(id);
    }
}
