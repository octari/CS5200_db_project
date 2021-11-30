package com.example.springtemplate.daos;

import com.example.springtemplate.models.Company;
import com.example.springtemplate.repositories.CompanyRestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class CompanyRestOrmDao {
  @Autowired
  CompanyRestRepository companyRepository;

  @PostMapping("/api/companies")
  public Company createCompany(@RequestBody Company company) {
    return companyRepository.save(company);
  }

  @GetMapping("/api/companies")
  public List<Company> findAllCompanies() {
    return companyRepository.findAllCompanies();
  }

  @GetMapping("/api/companies/{companyId}")
  public Company findCompanyById(
          @PathVariable("companyId") Integer id) {
    return companyRepository.findCompanyById(id);
  }

  @PutMapping("/api/companies/{companyId}")
  public Company updateCompany(
          @PathVariable("companyId") Integer id,
          @RequestBody Company companyUpdates) {
    Company company = companyRepository.findCompanyById(id);
    company.setCompanyName(companyUpdates.getName());
    company.setJobTitle(companyUpdates.getJobTitle());

    return companyRepository.save(company);
  }

  @DeleteMapping("/api/companies/{companyId}")
  public void deleteCompany(
          @PathVariable("companyId") Integer id) {
    companyRepository.deleteById(id);
  }
}

