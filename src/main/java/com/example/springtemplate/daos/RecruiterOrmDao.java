package com.example.springtemplate.daos;

import com.example.springtemplate.models.Recruiter;
import com.example.springtemplate.models.User;
import com.example.springtemplate.repositories.RecruiterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.sql.Date;
import java.util.List;

@RestController
public class RecruiterOrmDao {
  @Autowired
  RecruiterRepository recruiterRepository;

  @GetMapping("/orm/recruiters/create/{fn}/{ln}/{em}/{ph}/{us}/{pa}/{do}")
  public Recruiter createRecruiter(
          @PathVariable("fn")String first,
          @PathVariable("ln")String last,
          @PathVariable("em")String email,
          @PathVariable("ph")Integer phone,
          @PathVariable("us")String username,
          @PathVariable("pa")String password,
          @PathVariable("do") Date dateOfBirth) {
    Recruiter recruiter = new Recruiter(first, last, email, phone, username, password, dateOfBirth,null);
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

  @GetMapping("/orm/recruiters/update/{recruiterId}/{password}")
  public Recruiter updateRecruiter(@PathVariable("recruiterId") Integer id,
                         @PathVariable("password") String newPass) {
    Recruiter recruiter = recruiterRepository.findRecruiterById(id);
    recruiter.setPassword(newPass);
    return recruiterRepository.save(recruiter);

  }
}
