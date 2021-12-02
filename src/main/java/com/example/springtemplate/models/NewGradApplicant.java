package com.example.springtemplate.models;

import javax.persistence.*;

@Entity
@Table(name="new_grad_applicants")
public class NewGradApplicant extends Applicant {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String degree;
    private String intershipCoop;

    public Integer getId() { return id; }
    public void setId(Integer id) { this.id = id; }
    public String getDegree() { return degree; }
    public void setDegree(String degree) { this.degree = degree; }
    public String getIntershipCoop() { return intershipCoop; }
    public void setIntershipCoop(String intershipCoop) { this.intershipCoop = intershipCoop; }

    public NewGradApplicant(String degree, String intershipCoop) {
        this.degree = degree;
        this.intershipCoop = intershipCoop;
    }

    public NewGradApplicant() {}
}
