package com.example.springtemplate.daos;

import com.example.springtemplate.models.Recruiter;
import com.example.springtemplate.repositories.RecruiterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class RecruiterOrmDao {
  @Autowired
  RecruiterRepository recruiterRepository;

  @GetMapping("/orm/recruiters/create/{fn}/{ln}/{ph}/{em}")
  public Recruiter createRecruiter(
          @PathVariable("fn")String first,
          @PathVariable("ln")String last,
          @PathVariable("ph")Integer phone,
          @PathVariable("em")String email) {
    Recruiter recruiter = new Recruiter(first, last, email, phone, null);
    return recruiterRepository.save(recruiter);
  }

  @GetMapping("/orm/recruiters/find")
  public List<Recruiter> findAllRecruiters() {
    return recruiterRepository.findAllRecruiters();
  }

  @GetMapping("/orm/recruiters/find/id/{recruiterId}")
  public Recruiter findRecruiterById(
          @PathVariable("recruiterId") Integer id) {
    return recruiterRepository.findRecruiterById(id);
  }

  @GetMapping("/orm/recruiters/delete/{recruiterId}")
  public void deleteRecruiter(
          @PathVariable("recruiterId")Integer id) {
    recruiterRepository.deleteById(id);
  }

  @GetMapping("/orm/recruiters/update/{recruiterId}/{phone}/{email}")
  public Recruiter updateRecruiter(
          @PathVariable("recruiterId") Integer id,
          @PathVariable("phone") Integer newPhone,
          @PathVariable("email")String newEmail
  ) {
    Recruiter recruiter = recruiterRepository.findRecruiterById(id);
    recruiter.setEmail(newEmail);
    recruiter.setPhone(newPhone);
    return recruiterRepository.save(recruiter);
  }
}
