package com.example.springtemplate.daos;

import com.example.springtemplate.models.Applicant;
import com.example.springtemplate.models.NewGradApplicant;
import com.example.springtemplate.models.Recruiter;
import com.example.springtemplate.repositories.ApplicantRestRepository;
import com.example.springtemplate.repositories.NewGradApplicantRestRepository;
import com.example.springtemplate.repositories.RecruiterRestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class NewGradApplicantRestOrmDao {
    @Autowired
    NewGradApplicantRestRepository newGradApplicantRepository;

    @Autowired
    RecruiterRestRepository recruiterRepository;

    @PostMapping("/api/newGradApplicants")
    public NewGradApplicant createApplicant(@RequestBody NewGradApplicant newGradApplicant) {
        return newGradApplicantRepository.save(newGradApplicant);
    }

    @PostMapping("/api/recruiters/{recruiterId}/newGradApplicants")
    public Applicant createNewGradApplicantForRecruiter(
            @PathVariable("recruiterId") Integer cid,
            @RequestBody NewGradApplicant newGradApplicant) {
        newGradApplicant = newGradApplicantRepository.save(newGradApplicant);
        Recruiter recruiter = recruiterRepository.findById(cid).get();
        newGradApplicant.setRecruiter(recruiter);
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

    @GetMapping("/api/recruiters/{recruiterId}/newGradApplicants")
    public List<NewGradApplicant> findNewGradApplicantsForRecruiter(
            @PathVariable("recruiterId") Integer recruiterId) {
        Recruiter recruiter = recruiterRepository.findById(recruiterId).get();
        return recruiter.getNewGradApplicants();
    }

    @PutMapping("/api/newGradApplicants/{newGradApplicantId}")
    public NewGradApplicant updateNewGradApplicant(
            @PathVariable("newGradApplicantId") Integer id,
            @RequestBody NewGradApplicant newGradApplicantUpdates) {
        NewGradApplicant newGradApplicant = newGradApplicantRepository.findNewGradApplicantById(id);
        newGradApplicant.setFirstName(newGradApplicantUpdates.getFirstName());
        newGradApplicant.setLastName(newGradApplicantUpdates.getLastName());
        newGradApplicant.setEmail(newGradApplicantUpdates.getEmail());
        newGradApplicant.setUsername(newGradApplicantUpdates.getUsername());
        newGradApplicant.setPassword(newGradApplicantUpdates.getPassword());
        newGradApplicant.setDateOfBirth(newGradApplicantUpdates.getDateOfBirth());
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
