package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Recruiter;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface RecruiterRepository
        extends CrudRepository<Recruiter, Integer> {
  @Query(value = "SELECT * FROM recruiters",
          nativeQuery = true)
  public List<Recruiter> findAllRecruiters();
  @Query(value = "SELECT * FROM recruiters WHERE id=:recruiterId",
          nativeQuery = true)
  public Recruiter findRecruiterById(@Param("recruiterId") Integer id);

}

