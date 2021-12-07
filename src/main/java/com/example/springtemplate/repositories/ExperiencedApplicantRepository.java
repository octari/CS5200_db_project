package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Applicant;
import com.example.springtemplate.models.ExperiencedApplicant;
import com.example.springtemplate.models.NewGradApplicant;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ExperiencedApplicantRepository
        extends CrudRepository<ExperiencedApplicant, Integer> {
    @Query(value = "SELECT * FROM applicants",
            nativeQuery = true)
    public List<ExperiencedApplicant> findAllExperiencedApplicants();
    @Query(value = "SELECT * FROM applicants WHERE id=:applicantId",
            nativeQuery = true)
    public ExperiencedApplicant findExperiencedApplicantById(@Param("applicantId") Integer id);

}
