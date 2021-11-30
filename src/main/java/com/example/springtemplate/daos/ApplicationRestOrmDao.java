package com.example.springtemplate.daos;

import com.example.springtemplate.models.Application;
import com.example.springtemplate.repositories.ApplicationRestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class ApplicationRestOrmDao {
    @Autowired
    ApplicationRestRepository applicationRepository;

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

    @PutMapping("/api/applications/{applicantId}")
    public Application updateApplication(
            @PathVariable("applicantId") Integer id,
            @RequestBody Application applicantUpdates) {
        Application application = applicationRepository.findApplicationById(id);
        application.setApplicantName(applicantUpdates.getApplicantName());
        application.setAppliedPosition(applicantUpdates.getAppliedPosition());
        application.setAppliedDate(applicantUpdates.getAppliedDate());
        application.setApplicantId(applicantUpdates.getApplicantId());
        application.setJobId(applicantUpdates.getJobId());

        return applicationRepository.save(application);
    }

    @DeleteMapping("/api/applications/{applicationId}")
    public void deleteApplication(
            @PathVariable("applicationId") Integer id) {
        applicationRepository.deleteById(id);
    }
}
