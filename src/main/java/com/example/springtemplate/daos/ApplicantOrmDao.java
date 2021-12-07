package com.example.springtemplate.daos;

import com.example.springtemplate.models.Applicant;
import com.example.springtemplate.repositories.ApplicantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.sql.Date;

@RestController
public class ApplicantOrmDao {
    @Autowired
    ApplicantRepository applicantRepository;

    @GetMapping("/orm/applicants/create/{fn}/{ln}/{em}/{us}/{ps}/{db}/{re}")
    public Applicant createRecruiter(
            @PathVariable("fn")String first,
            @PathVariable("ln")String last,
            @PathVariable("em")String email,
            @PathVariable("us")String username,
            @PathVariable("ps")String password,
            @PathVariable("db") Date dateOfBirth,
            @PathVariable("re")Integer recruiterId)
             {
        Applicant applicant = new Applicant(first, last, email, username, password, dateOfBirth, recruiterId);
        return applicantRepository.save(applicant);
    }

    @GetMapping("/orm/applicants/find")
    public List<Applicant> findAllApplicants() {
        return applicantRepository.findAllApplicants();
    }

    @GetMapping("/orm/applicants/find/id/{applicantId}")
    public Applicant findRecruiterById(
            @PathVariable("applicantsId") Integer id) {
        return applicantRepository.findApplicantById(id);
    }

    @GetMapping("/orm/applicants/delete/{applicantId}")
    public void deleteApplicant(
            @PathVariable("applicantId")Integer id) {
        applicantRepository.deleteById(id);
    }

    @GetMapping("/orm/applicants/update/{applicantId}/{password}")
    public Applicant updateApplicant(
            @PathVariable("applicantId") Integer id,
            @PathVariable("password") String newPass
    ) {
        Applicant applicant = applicantRepository.findApplicantById(id);
        applicant.setPassword(newPass);
        return applicantRepository.save(applicant);
    }
}
