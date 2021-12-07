package com.example.springtemplate.models;

import javax.persistence.*;

@Entity
@DiscriminatorValue("Experienced")
public class ExperiencedApplicant extends Applicant {
    private String workExperience;

//    public Integer getId() { return id; }
//    public void setId(Integer id) { this.id = id; }
    public String getWorkExperience() { return workExperience; }
    public void setWorkExperience(String workExperience) { this.workExperience = workExperience; }

    public ExperiencedApplicant(String workExperience) {
        this.workExperience = workExperience;
    }

    public ExperiencedApplicant() {}
}
