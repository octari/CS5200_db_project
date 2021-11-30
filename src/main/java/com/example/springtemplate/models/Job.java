package com.example.springtemplate.models;

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

  public Job(String companyName, String jobTitle, String level, Integer companyId) {
    this.companyName = companyName;
    this.jobTitle = jobTitle;
    this.level = level;
    this.companyId = companyId;
  }

  public Job() {}
}
