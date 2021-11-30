package com.example.springtemplate.daos;

import com.example.springtemplate.models.Applicant;
import com.example.springtemplate.repositories.ApplicantRestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class ApplicantRestOrmDao {
  @Autowired
  ApplicantRestRepository applicantRepository;

  @PostMapping("/api/applicants")
  public Applicant createApplicant(@RequestBody Applicant applicant) {
    return applicantRepository.save(applicant);
  }

  @GetMapping("/api/applicants")
  public List<Applicant> findAllApplicantrs() {
    return applicantRepository.findAllApplicants();
  }

  @GetMapping("/api/applicants/{applicantId}")
  public Applicant findApplicantById(
          @PathVariable("applicantId") Integer id) {
    return applicantRepository.findApplicantById(id);
  }

  @PutMapping("/api/applicants/{applicantId}")
  public Applicant updateApplicant(
          @PathVariable("applicantId") Integer id,
          @RequestBody Applicant applicantUpdates) {
    Applicant applicant = applicantRepository.findApplicantById(id);
    applicant.setFirstName(applicantUpdates.getFirstName());
    applicant.setLastName(applicantUpdates.getLastName());
    applicant.setEmail(applicantUpdates.getEmail());
    applicant.setRecruiterId(applicantUpdates.getRecruiterId());

    return applicantRepository.save(applicant);
  }

  @DeleteMapping("/api/applicants/{applicantId}")
  public void deleteApplicant(
          @PathVariable("applicantId") Integer id) {
    applicantRepository.deleteById(id);
  }
}
