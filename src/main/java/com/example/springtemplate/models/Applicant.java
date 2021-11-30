package com.example.springtemplate.models;

import javax.persistence.*;

@Entity
@Table(name="applicants")
public class Applicant {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String firstName;
    private String lastName;
    private String email;
    private Integer recruiterId;

    public Integer getId() { return id; }
    public void setId(Integer id) { this.id = id; }
    public String getFirstName() { return firstName; }
    public void setFirstName(String firstName) { this.firstName = firstName; }
    public String getLastName() { return lastName; }
    public void setLastName(String lastName) { this.lastName = lastName; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    public Integer getRecruiterId() { return recruiterId; }
    public void setRecruiterId(Integer recruiterId) { this.recruiterId = recruiterId; }

    public Applicant(String first_name, String last_name, String email, Integer recruiterId) {
        this.firstName = first_name;
        this.lastName = last_name;
        this.email = email;
        this.recruiterId = recruiterId;
    }

    public Applicant() {}
}
