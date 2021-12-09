package com.example.springtemplate.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
@Table(name="experienced_applicants")
@DiscriminatorValue("Experienced")
public class ExperiencedApplicant extends Applicant {
    private String workExperience;

    @ManyToOne
    @JsonIgnore
    private Recruiter recruiter;

    public String getWorkExperience() { return workExperience; }
    public void setWorkExperience(String workExperience) { this.workExperience = workExperience; }
    public Recruiter getRecruiter() {return recruiter;}
    public void setRecruiter(Recruiter recruiter) {this.recruiter = recruiter; }

    public ExperiencedApplicant(String workExperience) {
        this.workExperience = workExperience;
    }

    public ExperiencedApplicant() {}
}
