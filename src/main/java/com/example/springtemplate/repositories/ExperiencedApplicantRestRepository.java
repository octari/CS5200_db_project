package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Applicant;
import com.example.springtemplate.models.ExperiencedApplicant;
import com.example.springtemplate.models.NewGradApplicant;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ExperiencedApplicantRestRepository
        extends CrudRepository<ExperiencedApplicant, Integer> {
//    @Query(value = "SELECT * FROM new_grad_applicant",
//            nativeQuery = true)
//    public List<NewGradApplicant> findAllnewGradApplicants();
//    @Query(value = "SELECT * FROM new_grad_applicant WHERE id=:applicantId",
//            nativeQuery = true)
//    public Applicant findNewGradApplicantById(@Param("newGradApplicantId") Integer id);

}
