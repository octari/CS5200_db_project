package com.example.springtemplate.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
@Table(name="new_grad_applicants")
@DiscriminatorValue("NewGrad")
public class NewGradApplicant extends Applicant {
    private String degree;
    private String internshipCoop;

    @ManyToOne
    @JsonIgnore
    private Recruiter recruiter;

    public String getDegree() { return degree; }
    public void setDegree(String degree) { this.degree = degree; }
    public String getInternshipCoop() { return internshipCoop; }
    public void setInternshipCoop(String internshipCoop) { this.internshipCoop = internshipCoop; }

    public Recruiter getRecruiter() {return recruiter;}
    public void setRecruiter(Recruiter recruiter) {this.recruiter = recruiter; }

    public NewGradApplicant(String degree, String internshipCoop) {
        this.degree = degree;
        this.internshipCoop = internshipCoop;
    }

    public NewGradApplicant() {}
}
