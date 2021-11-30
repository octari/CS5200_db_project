package com.example.springtemplate.daos;

import com.example.springtemplate.models.Company;

import java.sql.*;
import java.util.*;

public class CompanyJdbcDao {
  static final String DRIVER = "com.mysql.cj.jdbc.Driver";
  static final String HOST = "localhost:3306";
  static final String SCHEMA = "jobs_design";
  static final String CONFIG = "serverTimezone=UTC";
  static final String URL =
          "jdbc:mysql://"+HOST+"/"+SCHEMA+"?"+CONFIG;
  static final String USERNAME = "root";
  static final String PASSWORD = "P@ssw0rd";

  static Connection connection = null;
  static PreparedStatement statement = null;
  String CREATE_COMPANY = "INSERT INTO companies VALUES (null, ?, ?, ?, ?, ?, null)";
  String FIND_ALL_COMPANIES = "SELECT * FROM companies";
  String FIND_COMPANY_BY_ID = "SELECT * FROM companies WHERE id=?";
  String DELETE_COMPANY = "DELETE FROM companies WHERE id=?";
  String UPDATE_COMPANY = "UPDATE companies SET name=?, job_tittle=? WHERE id=?";

  private Connection getConnection() throws ClassNotFoundException, SQLException {
    Class.forName(DRIVER);
    return DriverManager.getConnection(URL, USERNAME, PASSWORD);
  }

  private void closeConnection(Connection connection) throws SQLException {
    connection.close();
  }

  public Company findCompanyById(Integer id) throws SQLException, ClassNotFoundException {
    Company company = null;
    connection = getConnection();

    statement = connection.prepareStatement(FIND_COMPANY_BY_ID);
    statement.setInt(1, id);
    ResultSet resultSet = statement.executeQuery();
    if(resultSet.next()) {
      company = new Company(
              resultSet.getString("name"),
              resultSet.getString("job_title")

      );
    }
    closeConnection(connection);
    return company;
  }

  public Integer deleteCompany(Integer companyId) throws SQLException, ClassNotFoundException {
    Integer rowsDeleted = 0;
    connection = getConnection();

    statement = connection.prepareStatement(DELETE_COMPANY);
    statement.setInt(1, companyId);
    rowsDeleted = statement.executeUpdate();
    closeConnection(connection);
    return rowsDeleted;
  }

  public Integer updateCompany(Integer companyId, Company newCompany) throws SQLException, ClassNotFoundException {
    Integer rowsUpdated = 0;
    connection = getConnection();

    statement = connection.prepareStatement(UPDATE_COMPANY);
    statement.setString(2, newCompany.getJobTitle());
    statement.setString(3, newCompany.getName());
    statement.setInt(1, companyId);
    rowsUpdated = statement.executeUpdate();
    closeConnection(connection);
    return rowsUpdated;
  }

  public List<Company> findAllCompanies() throws ClassNotFoundException, SQLException {
    List<Company> companies = new ArrayList<Company>();
    connection = getConnection();

    statement = connection.prepareStatement(FIND_ALL_COMPANIES);
    ResultSet resultSet = statement.executeQuery();
    while (resultSet.next()) {
      Company company = new Company(
              resultSet.getString("name"),
              resultSet.getString("job_title")

      );
      companies.add(company);
    }
    closeConnection(connection);
    return companies;

  }
  public Integer createCompany(Company company)
          throws ClassNotFoundException, SQLException {
    Integer rowsInserted = 0;
    connection = getConnection();
    statement = connection.prepareStatement(CREATE_COMPANY);
    statement.setString(1, company.getName());
    statement.setString(2, company.getJobTitle());

    rowsInserted = statement.executeUpdate();
    closeConnection(connection);
    return rowsInserted;
  }
  public static void main(String[] args) throws SQLException, ClassNotFoundException {
    CompanyJdbcDao dao = new CompanyJdbcDao();

    Company adam =
            new Company("Adam", "Smith");


    dao.createCompany(adam);

    dao.deleteCompany(25);
    Company newTom = new Company(
            "Tom",
            adam.getName());
    dao.updateCompany(6, newTom);
    Company tom = dao.findCompanyById(6);
    System.out.println(tom.getName());

    List<Company> companies = dao.findAllCompanies();
    for(Company company: companies) {
      System.out.println(company.getName());
    }
    Company company = dao.findCompanyById(7);
    System.out.println(company.getName());

  }
}