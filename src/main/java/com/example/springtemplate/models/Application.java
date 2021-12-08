package com.example.springtemplate.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="applications")
public class Application {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String applicantName;
    private String appliedPosition;
    private Date appliedDate;
//    private Integer applicantId;
    private Integer jobId;

    @ManyToOne
    @JsonIgnore
    private Applicant applicant;

    public Integer getId() { return id; }
    public void setId(Integer id) { this.id = id; }
    public String getApplicantName() { return applicantName; }
    public void setApplicantName(String applicantName) { this.applicantName = applicantName; }
    public String getAppliedPosition() { return appliedPosition; }
    public void setAppliedPosition(String appliedPosition) { this.appliedPosition = appliedPosition; }
    public Date getAppliedDate() { return appliedDate; }
    public void setAppliedDate(Date appliedDate) { this.appliedDate = appliedDate; }
//    public Integer getApplicantId() { return applicantId; }
//    public void setApplicantId(Integer applicantId) { this.applicantId = applicantId; }
    public Integer getJobId() { return jobId; }
    public void setJobId(Integer jobId) { this.jobId = jobId; }
    public Applicant getApplicant() { return applicant;}
    public void setApplicant(Applicant applicant) { this.applicant = applicant; }

    public Application(String applicantName, String appliedPosition, Date appliedDate, Integer jobId, Applicant applicant) {
        this.applicantName = applicantName;
        this.appliedPosition = appliedPosition;
        this.appliedDate = appliedDate;
        this.jobId = jobId;
        this.applicant = applicant;
    }

    public Application() {}
}
