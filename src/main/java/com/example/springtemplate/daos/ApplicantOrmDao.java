package com.example.springtemplate.daos;

import com.example.springtemplate.models.Applicant;
import com.example.springtemplate.repositories.ApplicantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ApplicantOrmDao {
    @Autowired
    ApplicantRepository applicantRepository;

    @GetMapping("/orm/applicants/create/{fn}/{ln}/{un}/{ps}/{em}/{ph}/{re}/{db}")
    public Applicant createRecruiter(
            @PathVariable("fn")String first,
            @PathVariable("ln")String last,
            @PathVariable("un")String username,
            @PathVariable("ps")String password,
            @PathVariable("em")String email,
            @PathVariable("ph")String phone,
            @PathVariable("re")Integer recruiterId,
            @PathVariable("db")String dateOfBirth) {
        Applicant applicant = new Applicant(first, last, username, password, email, phone, recruiterId, dateOfBirth);
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

    @GetMapping("/orm/applicants/update/{applicantId}/{email}/{applicantId}/{recruiterId}")
    public Applicant updateApplicant(
            @PathVariable("applicantId") Integer id,
            @PathVariable("email") String newEmail,
            @PathVariable("recruiterId") Integer newRecruiterId
    ) {
        Applicant applicant = applicantRepository.findApplicantById(id);
        applicant.setEmail(newEmail);
        applicant.setRecruiterId(newRecruiterId);
        return applicantRepository.save(applicant);
    }
}
