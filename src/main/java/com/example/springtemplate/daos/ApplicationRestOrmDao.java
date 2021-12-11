package com.example.springtemplate.daos;

import com.example.springtemplate.models.*;
import com.example.springtemplate.repositories.ApplicationRestRepository;
import com.example.springtemplate.repositories.ApplicantRestRepository;
import com.example.springtemplate.repositories.ExperiencedApplicantRestRepository;
import com.example.springtemplate.repositories.NewGradApplicantRestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class ApplicationRestOrmDao {
    @Autowired
    ApplicationRestRepository applicationRepository;

    @Autowired
    ApplicantRestRepository applicantRepository;
    @Autowired
    NewGradApplicantRestRepository newGradApplicantRepository;
    @Autowired
    ExperiencedApplicantRestRepository experiencedApplicantRepository;

    @PostMapping("/api/applications")
    public Application createApplication(@RequestBody Application application) {
        return applicationRepository.save(application);
    }

    @GetMapping("/api/applications")
    public List<Application> findAllApplications() {
        return applicationRepository.findAllApplications();
    }

    @GetMapping("/api/applications/{applicationId}")
    public Application findApplicationIdById(
            @PathVariable("applicationId") Integer id) {
        return applicationRepository.findApplicationById(id);
    }

    @GetMapping("/api/applicants/{applicantId}/applications")
    public List<Application> findApplicationsForApplicant(
            @PathVariable("applicantId") Integer applicantId) {
        Applicant applicant = applicantRepository.findById(applicantId).get();
        return applicant.getApplications();
    }

    @GetMapping("/api/experiencedApplicants/{applicantId}/applications")
    public List<Application> findApplicationsForExperiencedApplicant(
            @PathVariable("applicantId") Integer applicantId) {
        ExperiencedApplicant experiencedApplicant = experiencedApplicantRepository.findById(applicantId).get();
        return experiencedApplicant.getApplications();
    }

    @GetMapping("/api/newGradApplicants/{applicantId}/applications")
    public List<Application> findApplicationsForNewGradApplicant(
            @PathVariable("applicantId") Integer applicantId) {
        NewGradApplicant newGradApplicant = newGradApplicantRepository.findById(applicantId).get();
        return newGradApplicant.getApplications();
    }

    @PutMapping("/api/applications/{applicantId}")
    public Application updateApplication(
            @PathVariable("applicantId") Integer id,
            @RequestBody Application applicantUpdates) {
        Application application = applicationRepository.findApplicationById(id);
        application.setApplicantName(applicantUpdates.getApplicantName());
        application.setAppliedPosition(applicantUpdates.getAppliedPosition());
        application.setAppliedDate(applicantUpdates.getAppliedDate());
        application.setApplicant(applicantUpdates.getApplicant());
//        application.setJobId(applicantUpdates.getJobId());

        return applicationRepository.save(application);
    }

    @DeleteMapping("/api/applications/{applicationId}")
    public void deleteApplication(
            @PathVariable("applicationId") Integer id) {
        applicationRepository.deleteById(id);
    }
}
