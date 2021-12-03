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
    private String user_name;
    private String password;
    private String email;
    private String phone;
    private Integer recruiterId;
    private Date dataOfBirth;

    public Integer getId() { return id; }
    public void setId(Integer id) { this.id = id; }
    public String getFirstName() { return firstName; }
    public void setFirstName(String firstName) { this.firstName = firstName; }
    public String getLastName() { return lastName; }
    public void setLastName(String lastName) { this.lastName = lastName; }
    public String getUser_name() { return user_name; }

    public void setUser_name(String user_name) { this.user_name = user_name; }

    public String getPassword() { return password; }

    public void setPassword(String password) { this.password = password; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    public String getPhone() { return phone; }

    public void setPhone(String phone) { this.phone = phone; }
    public Integer getRecruiterId() { return recruiterId; }
    public void setRecruiterId(Integer recruiterId) { this.recruiterId = recruiterId; }
    public Date  getDataOfBirth() { return dataOfBirth; }

    public void setDataOfBirth(Date dataOfBirth) { this.dataOfBirth = dataOfBirth; }

    public Applicant(String first_name, String last_name, String email, String user_name, String password, String phone, Integer recruiterId, Date  dataOfBirth) {
        this.firstName = first_name;
        this.lastName = last_name;
        this.user_name = user_name;
        this.password = password;
        this.email = email;
        this.phone = phone;
        this.recruiterId = recruiterId;
        this.dataOfBirth = dataOfBirth;
    }

    public Applicant() {}





}
