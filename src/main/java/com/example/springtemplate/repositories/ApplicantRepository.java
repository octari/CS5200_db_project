package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Applicant;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ApplicantRepository
        extends CrudRepository<Applicant, Integer> {
  @Query(value = "SELECT * FROM applicants",
          nativeQuery = true)
  public List<Applicant> findAllApplicants();
  @Query(value = "SELECT * FROM users WHERE id=:applicantId",
          nativeQuery = true)
  public Applicant findApplicantById(@Param("applicantId") Integer id);

}
