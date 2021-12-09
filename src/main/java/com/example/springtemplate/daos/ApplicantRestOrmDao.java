package com.example.springtemplate.daos;

import com.example.springtemplate.models.Applicant;
import com.example.springtemplate.models.Recruiter;
import com.example.springtemplate.repositories.ApplicantRestRepository;
import com.example.springtemplate.repositories.RecruiterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class ApplicantRestOrmDao {
  @Autowired
  ApplicantRestRepository applicantRepository;

  @Autowired
  RecruiterRepository recruiterRepository;

  @PostMapping("/api/applicants")
  public Applicant createApplicant(@RequestBody Applicant applicant) {
    return applicantRepository.save(applicant);
  }

  @PostMapping("/api/recruiters/{recruiterId}/applicants")
  public Applicant createApplicantForRecruiter(
          @PathVariable("recruiterId") Integer cid,
          @RequestBody Applicant applicant) {
    applicant = applicantRepository.save(applicant);
    Recruiter recruiter = recruiterRepository.findById(cid).get();
    applicant.setRecruiter(recruiter);
    return applicantRepository.save(applicant);
  }

  @GetMapping("/api/applicants")
  public List<Applicant> findAllApplicants() {
    return applicantRepository.findAllApplicants();
  }

  @GetMapping("/api/applicants/{applicantId}")
  public Applicant findApplicantById(
          @PathVariable("applicantId") Integer id) {
    return applicantRepository.findApplicantById(id);
  }

  @GetMapping("/api/recruiters/{recruiterId}/applicants")
  public List<Applicant> findApplicantsForRecruiter(
          @PathVariable("recruiterId") Integer recruiterId) {
    Recruiter recruiter = recruiterRepository.findById(recruiterId).get();
    return recruiter.getApplicants();
  }

  @PutMapping("/api/applicants/{applicantId}")
  public Applicant updateApplicant(
          @PathVariable("applicantId") Integer id,
          @RequestBody Applicant applicantUpdates) {
    Applicant applicant = applicantRepository.findApplicantById(id);
    applicant.setFirstName(applicantUpdates.getFirstName());
    applicant.setLastName(applicantUpdates.getLastName());
    applicant.setEmail(applicantUpdates.getEmail());
    applicant.setUsername(applicantUpdates.getUsername());
    applicant.setPassword(applicantUpdates.getPassword());
    applicant.setDateOfBirth(applicantUpdates.getDateOfBirth());


    return applicantRepository.save(applicant);
  }

  @DeleteMapping("/api/applicants/{applicantId}")
  public void deleteApplicant(
          @PathVariable("applicantId") Integer id) {
    applicantRepository.deleteById(id);
  }
}
