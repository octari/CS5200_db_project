package com.example.springtemplate.models;

import javax.persistence.*;

@Entity
@Table(name="new_grad_applicants")
@DiscriminatorValue("NewGrad")
public class NewGradApplicant extends Applicant {
    private String degree;
    private String internshipCoop;

    public String getDegree() { return degree; }
    public void setDegree(String degree) { this.degree = degree; }
    public String getInternshipCoop() { return internshipCoop; }
    public void setInternshipCoop(String internshipCoop) { this.internshipCoop = internshipCoop; }

    public NewGradApplicant(String degree, String internshipCoop) {
        this.degree = degree;
        this.internshipCoop = internshipCoop;
    }

    public NewGradApplicant() {}
}
