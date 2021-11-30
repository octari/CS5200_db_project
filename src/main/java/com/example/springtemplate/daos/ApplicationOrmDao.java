package com.example.springtemplate.daos;

import com.example.springtemplate.models.Application;
import com.example.springtemplate.repositories.ApplicationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;
import java.util.List;

@RestController
public class ApplicationOrmDao {
    @Autowired
    ApplicationRepository applicationRepository;

    @GetMapping("/orm/applications/create/{na}/{po}/{da}/{ap}/{jo}")
    public Application createApplication(
            @PathVariable("na")String name,
            @PathVariable("po")String position,
            @PathVariable("da") Date date,
            @PathVariable("ap")Integer applicantId,
            @PathVariable("jo")Integer jobId) {
        Application application = new Application(name, position, date, applicantId, jobId);
        return applicationRepository.save(application);
    }

    @GetMapping("/orm/applications/find")
    public List<Application> findAllApplications() {
        return applicationRepository.findAllApplications();
    }

    @GetMapping("/orm/applications/find/id/{applicationId}")
    public Application findApplicationById(
            @PathVariable("applicationId") Integer id) {
        return applicationRepository.findApplicationById(id);
    }

    @GetMapping("/orm/applications/delete/{applicationId}")
    public void deleteApplication(
            @PathVariable("applicationId")Integer id) {
        applicationRepository.deleteById(id);
    }

    @GetMapping("/orm/applications/update/{applicationId}/{appliedDate}")
    public Application updateApplication(
            @PathVariable("applicationId") Integer id,
            @PathVariable("appliedDate") Date newAppliedDate
    ) {
        Application application = applicationRepository.findApplicationById(id);
        application.setAppliedDate(newAppliedDate);
        return applicationRepository.save(application);
    }
}
