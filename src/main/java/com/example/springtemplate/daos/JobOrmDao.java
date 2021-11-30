package com.example.springtemplate.daos;

import com.example.springtemplate.models.Job;
import com.example.springtemplate.repositories.JobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class JobOrmDao {
  @Autowired
  JobRepository jobRepository;

  @GetMapping("/orm/jobs/create/{na}/{jo}/{le}/{co}")
  public Job createJob(
          @PathVariable("na")String companyName,
          @PathVariable("jo")String jobTitle,
          @PathVariable("le")String level,
          @PathVariable("co")Integer companyId) {
    Job job = new Job(companyName, jobTitle, level, companyId);
    return jobRepository.save(job);
  }

  @GetMapping("/orm/jobs/find")
  public List<Job> findAllJobs() {
    return jobRepository.findAllJobs();
  }

  @GetMapping("/orm/jobs/find/id/{jobId}")
  public Job findJobById(
          @PathVariable("jobId") Integer id) {
    return jobRepository.findJobById(id);
  }

  @GetMapping("/orm/jobs/delete/{jobId}")
  public void deleteJob(
          @PathVariable("jobId")Integer id) {
    jobRepository.deleteById(id);
  }

  @GetMapping("/orm/jobs/update/{jobId}/{jobTitle}/{level}")
  public Job updateJob(
          @PathVariable("jobId") Integer id,
          @PathVariable("jobTitle") String newJobTitle,
          @PathVariable("level") String newLevel
  ) {
    Job job = jobRepository.findJobById(id);
    job.setJobTitle(newJobTitle);
    job.setLevel(newLevel);

    return jobRepository.save(job);
  }
}
