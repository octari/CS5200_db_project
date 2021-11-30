package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Application;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ApplicationRestRepository
        extends CrudRepository<Application, Integer> {
    @Query(value = "SELECT * FROM applications",
            nativeQuery = true)
    public List<Application> findAllApplications();
    @Query(value = "SELECT * FROM applications WHERE id=:applicationId",
            nativeQuery = true)
    public Application findApplicationById(@Param("applicationId") Integer id);

}

