package com.example.springtemplate.daos;

import com.example.springtemplate.models.Job;
import com.example.springtemplate.repositories.JobRestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class JobRestOrmDao {
  @Autowired
  JobRestRepository jobRepository;

  @PostMapping("/api/jobs")
  public Job createJob(@RequestBody Job job) {
    return jobRepository.save(job);
  }

  @GetMapping("/api/jobs")
  public List<Job> findAllApplications() {
    return jobRepository.findAllJobs();
  }

  @GetMapping("/api/jobs/{jobId}")
  public Job findJobById(
          @PathVariable("jobId") Integer id) {
    return jobRepository.findJobById(id);
  }

  @PutMapping("/api/jobs/{jobId}")
  public Job updateJob(
          @PathVariable("jobId") Integer id,
          @RequestBody Job jobUpdates) {
    Job job = jobRepository.findJobById(id);
    job.setCompanyName(jobUpdates.getCompanyName());
    job.setJobTitle(jobUpdates.getJobTitle());
    job.setLevel(jobUpdates.getLevel());
    job.setCompanyId(jobUpdates.getCompanyId());

    return jobRepository.save(job);
  }

  @DeleteMapping("/api/jobs/{jobId}")
  public void deleteJob(
          @PathVariable("jobId") Integer id) {
    jobRepository.deleteById(id);
  }
}
