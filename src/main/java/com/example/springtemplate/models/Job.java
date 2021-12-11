package com.example.springtemplate.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
@Table(name="jobs")
public class Job {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;
  private String companyName;
  private String jobTitle;
  private String level;
  private Integer companyId;


  @ManyToOne
  @JsonIgnore
  private Application application;

  public Integer getId() { return id; }
  public void setId(Integer id) { this.id = id; }
  public String getJobTitle() { return jobTitle; }
  public void setJobTitle(String jobTitle) { this.jobTitle = jobTitle; }
  public String getCompanyName() { return companyName; }
  public void setCompanyName(String companyName) { this.companyName = companyName; }
  public String getLevel() { return level; }
  public void setLevel(String level) { this.level = level; }
  public Integer getCompanyId() { return companyId; }
  public void setCompanyId(Integer companyId) { this.companyId = companyId; }
  public Application getApplication() { return application;}
  public void setApplication(Application application) { this.application = application; }

  public Job(String companyName, String jobTitle, String level, Integer companyId, Application application) {
    this.companyName = companyName;
    this.jobTitle = jobTitle;
    this.level = level;
    this.companyId = companyId;
    this.application = application;
  }

  public Job() {}
}
