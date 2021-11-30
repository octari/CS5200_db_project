package com.example.springtemplate.daos;

import com.example.springtemplate.models.Recruiter;
import com.example.springtemplate.models.User;
import com.example.springtemplate.repositories.RecruiterRestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class RecruiterRestOrmDao {
    @Autowired
    RecruiterRestRepository recruiterRepository;
    @PostMapping("/api/recruiters")
    public Recruiter createRecruiter(@RequestBody Recruiter recruiter) {
        return recruiterRepository.save(recruiter);
    }

    @GetMapping("/api/recruiters")
    public List<Recruiter> findAllRecruiters() {
        return recruiterRepository.findAllRecruiters();
    }

    @GetMapping("/api/recruiters/{recruiterId}")
    public Recruiter findRecruiterById(
            @PathVariable("recruiterId") Integer id) {
        return recruiterRepository.findRecruiterById(id);
    }

    @PutMapping("/api/recruiters/{recruiterId}")
    public Recruiter updateRecruiter(
            @PathVariable("recruiterId") Integer id,
            @RequestBody Recruiter recruiterUpdates) {
        Recruiter recruiter = recruiterRepository.findRecruiterById(id);
        recruiter.setFirstName(recruiterUpdates.getFirstName());
        recruiter.setLastName(recruiterUpdates.getLastName());
        recruiter.setEmail(recruiterUpdates.getEmail());
        recruiter.setPhone(recruiterUpdates.getPhone());
        recruiter.setCompanyId(recruiterUpdates.getCompanyId());
        return recruiterRepository.save(recruiter);
    }

    @DeleteMapping("/api/recruiters/{recruiterId}")
    public void deleteRecruiter(
            @PathVariable("recruiterId") Integer id) {
        recruiterRepository.deleteById(id);
    }
}