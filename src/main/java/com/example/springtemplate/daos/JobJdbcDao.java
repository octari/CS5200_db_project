package com.example.springtemplate.daos;

import com.example.springtemplate.models.Job;

import java.sql.*;
import java.sql.Date;
import java.util.*;

public class JobJdbcDao {
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
  String CREATE_JOB = "INSERT INTO jobs VALUES (null, ?, ?, ?, ?, ?)";
  String FIND_ALL_JOBS = "SELECT * FROM jobs";
  String FIND_JOB_BY_ID = "SELECT * FROM jobs WHERE id=?";
  String DELETE_JOB = "DELETE FROM jobs WHERE id=?";
  //String UPDATE_USER_PASSWORD = "UPDATE applications SET password=? WHERE id=?";
  String UPDATE_JOB = "UPDATE jobs SET jobTitle=?, companyName=?, level=?, companyId=? WHERE id=?";

  private Connection getConnection() throws ClassNotFoundException, SQLException {
    Class.forName(DRIVER);
    return DriverManager.getConnection(URL, USERNAME, PASSWORD);
  }

  private void closeConnection(Connection connection) throws SQLException {
    connection.close();
  }

  public Job findJobById(Integer id) throws SQLException, ClassNotFoundException {
    Job job = null;
    connection = getConnection();

    statement = connection.prepareStatement(FIND_JOB_BY_ID);
    statement.setInt(1, id);
    ResultSet resultSet = statement.executeQuery();
    if(resultSet.next()) {
      job = new Job(
              resultSet.getString("companyName"),
              resultSet.getString("jobTitle"),
              resultSet.getString("level"),
              resultSet.getInt("companyId")

      );
    }
    closeConnection(connection);
    return job;
  }

  public Integer deleteJob(Integer jobId) throws SQLException, ClassNotFoundException {
    Integer rowsDeleted = 0;
    connection = getConnection();

    statement = connection.prepareStatement(DELETE_JOB);
    statement.setInt(1, jobId);
    rowsDeleted = statement.executeUpdate();
    closeConnection(connection);
    return rowsDeleted;
  }

  public Integer updateJob(Integer jobId, Job newJob) throws SQLException, ClassNotFoundException {
    Integer rowsUpdated = 0;
    connection = getConnection();

    statement = connection.prepareStatement(UPDATE_JOB);
    statement.setString(1, newJob.getCompanyName());
    statement.setString(2, newJob.getJobTitle());
    statement.setString(3, newJob.getLevel());
    statement.setInt(4, newJob.getCompanyId());


    rowsUpdated = statement.executeUpdate();
    closeConnection(connection);
    return rowsUpdated;
  }

  public List<Job> findAllJobs() throws ClassNotFoundException, SQLException {
    List<Job> applications = new ArrayList<Job>();
    connection = getConnection();

    statement = connection.prepareStatement(FIND_ALL_JOBS);
    ResultSet resultSet = statement.executeQuery();
    while (resultSet.next()) {
      Job application = new Job(
              resultSet.getString("companyName"),
              resultSet.getString("jobTitle"),
              resultSet.getString("level"),
              resultSet.getInt("companyId")
      );
      applications.add(application);
    }
    closeConnection(connection);
    return applications;

  }
  public Integer createJob(Job newJob)
          throws ClassNotFoundException, SQLException {
    Integer rowsInserted = 0;
    connection = getConnection();
    statement = connection.prepareStatement(CREATE_JOB);
    statement.setString(1, newJob.getCompanyName());
    statement.setString(2, newJob.getJobTitle());
    statement.setString(3, newJob.getLevel());
    statement.setInt(4, newJob.getCompanyId());
    rowsInserted = statement.executeUpdate();
    closeConnection(connection);
    return rowsInserted;
  }
//    public static void main(String[] args) throws SQLException, ClassNotFoundException {
//        ApplicationJdbcDao dao = new ApplicationJdbcDao();
//
//        Application adam =
//                new Application("Adam", "Smith", "adamsmith@company.com",
//                        1234567890, 1);
//        Application thomas =
//                new Application("Thomas", "Sowell", "thomassowell@gmail.com",
//                        1234567891, 2);
//        Recruiter catherine =
//                new Recruiter("Catherine", "Wood", "cathiewood@gmail.com",
//                        1234567892, 3);
//
//        dao.createRecruiter(adam);
//        dao.createRecruiter(thomas);
//        dao.createRecruiter(catherine);

//        dao.deleteRecruiter(25);
//        User newTom = new User(
//                "Tom",
//                "Sowell",
//                "tom",
//                "knowitall",
//                thomas.getProfilePicture());
//        dao.updateUser(6, newTom);
//        User tom = dao.findUserById(6);
//        System.out.println(tom.getUsername());
//
//        List<User> users = dao.findAllUsers();
//        for(User user: users) {
//            System.out.println(user.getUsername());
//        }
//        User user = dao.findUserById(7);
//        System.out.println(user.getUsername());

//    }
}
