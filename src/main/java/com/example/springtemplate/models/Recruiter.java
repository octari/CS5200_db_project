package com.example.springtemplate.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.Where;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="recruiters")
public class Recruiter {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String firstName;
    private String lastName;
    private String email;
    private Integer phone;
    private Integer companyId;

    @OneToMany(mappedBy = "recruiter")
    @JsonIgnore
    private List<Applicant> applicants;

    @OneToMany(mappedBy = "recruiter")
    @Where(clause="DTYPE='NEWGRAD'")
    @JsonIgnore
    private List<NewGradApplicant> newGradApplicants;

    @OneToMany(mappedBy = "recruiter")
    @Where(clause="DTYPE='EXPERIENCED'")
    @JsonIgnore
    private List<ExperiencedApplicant> experiencedApplicants;

    public Integer getId() { return id; }
    public void setId(Integer id) { this.id = id; }
    public String getFirstName() { return firstName; }
    public void setFirstName(String firstName) { this.firstName = firstName; }
    public String getLastName() { return lastName; }
    public void setLastName(String lastName) { this.lastName = lastName; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    public Integer getPhone() { return phone; }
    public void setPhone(Integer phone) { this.phone = phone; }
    public Integer getCompanyId() { return companyId; }
    public void setCompanyId(Integer companyId) { this.companyId = companyId; }
    public List<Applicant> getApplicants() { return applicants; }
    public void setApplicants(List<Applicant> applicants) { this.applicants = applicants; }
    public List<NewGradApplicant> getNewGradApplicants() { return newGradApplicants; }
    public void setNewGradApplicants(List<NewGradApplicant> newGradApplicants) { this.newGradApplicants = newGradApplicants; }
    public List<ExperiencedApplicant> getExperiencedApplicants() { return experiencedApplicants; }
    public void setExperiencedApplicants(List<ExperiencedApplicant> experiencedApplicants) { this.experiencedApplicants = experiencedApplicants; }


    public Recruiter(String first_name, String last_name, String email, Integer phone, Integer companyId) {
        this.firstName = first_name;
        this.lastName = last_name;
        this.email = email;
        this.phone = phone;
        this.companyId = companyId;
    }

    public Recruiter() {}
}
