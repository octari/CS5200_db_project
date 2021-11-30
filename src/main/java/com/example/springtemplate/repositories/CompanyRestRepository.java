package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Company;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CompanyRestRepository
        extends CrudRepository<Company, Integer> {
  @Query(value = "SELECT * FROM companies",
          nativeQuery = true)
  public List<Company> findAllCompanies();
  @Query(value = "SELECT * FROM companies WHERE id=:companyId",
          nativeQuery = true)
  public Company findCompanyById(@Param("companyId") Integer id);

}
//package com.example.springtemplate.repositories;
//
//public class CompanyRestRepository {
//}
