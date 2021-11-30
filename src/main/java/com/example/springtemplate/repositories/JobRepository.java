package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Job;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface JobRepository
        extends CrudRepository<Job, Integer> {
  @Query(value = "SELECT * FROM jobs",
          nativeQuery = true)
  public List<Job> findAllJobs();
  @Query(value = "SELECT * FROM jobs WHERE id=:jobId",
          nativeQuery = true)
  public Job findJobById(@Param("jobId") Integer id);

}

//package com.example.springtemplate.repositories;
//
//public class JobRepository {
//}
