package com.example.springtemplate.models;

import javax.persistence.*;

@Entity
@DiscriminatorValue("NewGrad")
public class NewGradApplicant extends Applicant {
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Integer id;
    private String degree;
    private String internshipCoop;

//    public Integer getId() { return id; }
//    public void setId(Integer id) { this.id = id; }
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
