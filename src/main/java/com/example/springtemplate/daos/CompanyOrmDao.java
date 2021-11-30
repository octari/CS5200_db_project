package com.example.springtemplate.daos;

import com.example.springtemplate.models.Company;
import com.example.springtemplate.repositories.CompanyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CompanyOrmDao {
  @Autowired
  CompanyRepository companyRepository;

  @GetMapping("/orm/companies/create/{jobt}/{nm}")
  public Company createCompany(
          @PathVariable("jobt")String jobTitle,
          @PathVariable("nm")String name) {
    Company company = new Company(jobTitle, name);
    return companyRepository.save(company);
  }

  @GetMapping("/orm/companies/find")
  public List<Company> findAllCompanies() {
    return companyRepository.findAllCompanies();
  }

  @GetMapping("/orm/companies/find/id/{companyId}")
  public Company findCompanyById(
          @PathVariable("companyId") Integer id) {
    return companyRepository.findCompanyById(id);
  }

  @GetMapping("/orm/companies/delete/{companyId}")
  public void deleteCompany(
          @PathVariable("companyId")Integer id) {
    companyRepository.deleteById(id);
  }

  @GetMapping("/orm/companies/update/{companyId}/{compName}")
  public Company updateCompany(
          @PathVariable("companyId") Integer id,
          @PathVariable("compName")String newCompName
  ) {
    Company company = companyRepository.findCompanyById(id);
    company.setCompanyName(newCompName);
    return companyRepository.save(company);
  }
}
