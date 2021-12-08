package com.example.springtemplate.models;

import javax.persistence.*;

@Entity
@Table(name="experienced_applicants")
@DiscriminatorValue("Experienced")
public class ExperiencedApplicant extends Applicant {
    private String workExperience;

    public String getWorkExperience() { return workExperience; }
    public void setWorkExperience(String workExperience) { this.workExperience = workExperience; }

    public ExperiencedApplicant(String workExperience) {
        this.workExperience = workExperience;
    }

    public ExperiencedApplicant() {}
}
