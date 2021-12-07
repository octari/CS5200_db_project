package com.example.springtemplate.repositories;

import com.example.springtemplate.models.NewGradApplicant;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface NewGradApplicantRestRepository
        extends CrudRepository<NewGradApplicant, Integer> {
//    @Query(value = "SELECT * FROM new_grad_applicant",
//            nativeQuery = true)
//    public List<NewGradApplicant> findAllNewGradApplicants();
//    @Query(value = "SELECT * FROM new_grad_applicant WHERE id=:applicantId",
//            nativeQuery = true)
//    public NewGradApplicant findNewGradApplicantById(@Param("newGradApplicantId") Integer id);

}
