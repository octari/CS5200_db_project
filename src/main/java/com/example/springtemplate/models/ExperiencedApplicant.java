package com.example.springtemplate.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="experienced_applicants")
@DiscriminatorValue("Experienced")
public class ExperiencedApplicant extends Applicant {
    private String workExperience;

    @ManyToOne
    @JsonIgnore
    private Recruiter recruiter;

    @OneToMany(mappedBy = "applicant")
    @JsonIgnore
    private List<Application> applications;

    public String getWorkExperience() { return workExperience; }
    public void setWorkExperience(String workExperience) { this.workExperience = workExperience; }
    public Recruiter getRecruiter() {return recruiter;}
    public void setRecruiter(Recruiter recruiter) {this.recruiter = recruiter; }
    public List<Application> getApplications() { return applications; }
    public void setApplications(List<Application> applications) { this.applications = applications; }

    public ExperiencedApplicant(String workExperience) {
        this.workExperience = workExperience;
    }

    public ExperiencedApplicant() {}
}
