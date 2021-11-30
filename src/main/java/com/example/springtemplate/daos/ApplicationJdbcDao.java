package com.example.springtemplate.daos;

import com.example.springtemplate.models.Application;

import java.sql.*;
import java.sql.Date;
import java.util.*;

public class ApplicationJdbcDao {
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
    String CREATE_APPLICATION = "INSERT INTO applications VALUES (null, ?, ?, ?, ?, ?)";
    String FIND_ALL_APPLICATIONS = "SELECT * FROM applications";
    String FIND_APPLICATION_BY_ID = "SELECT * FROM applications WHERE id=?";
    String DELETE_APPLICATION = "DELETE FROM applications WHERE id=?";
    //String UPDATE_USER_PASSWORD = "UPDATE applications SET password=? WHERE id=?";
    String UPDATE_APPLICATION = "UPDATE applications SET applicantName=?, appliedPosition=?, appliedDate=?, applicantId=?, jobId=? WHERE id=?";

    private Connection getConnection() throws ClassNotFoundException, SQLException {
        Class.forName(DRIVER);
        return DriverManager.getConnection(URL, USERNAME, PASSWORD);
    }

    private void closeConnection(Connection connection) throws SQLException {
        connection.close();
    }

    public Application findApplicationById(Integer id) throws SQLException, ClassNotFoundException {
        Application application = null;
        connection = getConnection();

        statement = connection.prepareStatement(FIND_APPLICATION_BY_ID);
        statement.setInt(1, id);
        ResultSet resultSet = statement.executeQuery();
        if(resultSet.next()) {
            application = new Application(
                    resultSet.getString("applicantName"),
                    resultSet.getString("appliedPosition"),
                    resultSet.getDate("appliedDate"),
                    resultSet.getInt("applicantId"),
                    resultSet.getInt("jobId")
            );
        }
        closeConnection(connection);
        return application;
    }

    public Integer deleteApplication(Integer applicationId) throws SQLException, ClassNotFoundException {
        Integer rowsDeleted = 0;
        connection = getConnection();

        statement = connection.prepareStatement(DELETE_APPLICATION);
        statement.setInt(1, applicationId);
        rowsDeleted = statement.executeUpdate();
        closeConnection(connection);
        return rowsDeleted;
    }

    public Integer updateApplication(Integer applicationId, Application newApplication) throws SQLException, ClassNotFoundException {
        Integer rowsUpdated = 0;
        connection = getConnection();

        statement = connection.prepareStatement(UPDATE_APPLICATION);
        statement.setString(1, newApplication.getApplicantName());
        statement.setString(2, newApplication.getAppliedPosition());
        statement.setDate(3, (Date) newApplication.getAppliedDate());
        statement.setInt(4, newApplication.getApplicantId());
        statement.setInt(5, newApplication.getJobId());

        rowsUpdated = statement.executeUpdate();
        closeConnection(connection);
        return rowsUpdated;
    }

    public List<Application> findAllApplications() throws ClassNotFoundException, SQLException {
        List<Application> applications = new ArrayList<Application>();
        connection = getConnection();

        statement = connection.prepareStatement(FIND_ALL_APPLICATIONS);
        ResultSet resultSet = statement.executeQuery();
        while (resultSet.next()) {
            Application application = new Application(
                    resultSet.getString("applicantName"),
                    resultSet.getString("appliedPosition"),
                    resultSet.getDate("appliedDate"),
                    resultSet.getInt("applicantId"),
                    resultSet.getInt("jobId")
            );
            applications.add(application);
        }
        closeConnection(connection);
        return applications;

    }
    public Integer createApplication(Application newApplication)
            throws ClassNotFoundException, SQLException {
        Integer rowsInserted = 0;
        connection = getConnection();
        statement = connection.prepareStatement(CREATE_APPLICATION);
        statement.setString(1, newApplication.getApplicantName());
        statement.setString(2, newApplication.getAppliedPosition());
        statement.setDate(3, (Date) newApplication.getAppliedDate());
        statement.setInt(4, newApplication.getApplicantId());
        statement.setInt(5, newApplication.getJobId());
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
