package com.example.springtemplate.models;


import java.sql.Date;
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
    private String username;
    private String password;
    private Date dateOfBirth;
    private Integer recruiterId;

    public Integer getId() { return id; }
    public void setId(Integer id) { this.id = id; }
    public String getFirstName() { return firstName; }
    public void setFirstName(String firstName) { this.firstName = firstName; }
    public String getLastName() { return lastName; }
    public void setLastName(String lastName) { this.lastName = lastName; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }
    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }
    public Date  getDateOfBirth() { return dateOfBirth; }
    public void setDateOfBirth(Date dateOfBirth) { this.dateOfBirth = dateOfBirth;}
    public Integer getRecruiterId() { return recruiterId; }
    public void setRecruiterId(Integer recruiterId) { this.recruiterId = recruiterId; }


    public Applicant(String first_name, String last_name, String email, String username, String password,  Date dateOfBirth, Integer recruiterId) {
        this.firstName = first_name;
        this.lastName = last_name;
        this.email = email;
        this.username = username;
        this.password = password;
        this.dateOfBirth = dateOfBirth;
        this.recruiterId = recruiterId;
    }

    public Applicant() {}





}
