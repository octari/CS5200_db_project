package com.example.springtemplate.models;

import javax.persistence.*;

@Entity
@Table(name="companies")
public class Company {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;
  private String jobTitle;
  private String name;


  public Integer getId() { return id; }
  public void setId(Integer id) { this.id = id; }
  public String getJobTitle() { return jobTitle; }
  public void setJobTitle(String jobTitle) { this.jobTitle = jobTitle; }
  public String getName() { return name; }
  public void setCompanyName(String companyName) { this.name = companyName; }


  public Company(String jobTitle, String name) {
    this.jobTitle = jobTitle;
    this.name = name;
  }

  public Company() {}
}
