package com.example.springtemplate.daos;

import com.example.springtemplate.models.Applicant;

import java.sql.*;
import java.util.*;

public class ApplicantJdbcDao {
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
    String CREATE_APPLICANT = "INSERT INTO applicants VALUES (null, ?, ?, ?, ?)";
    String FIND_ALL_APPLICANTS = "SELECT * FROM applicants";
    String FIND_APPLICANT_BY_ID = "SELECT * FROM applicants WHERE id=?";
    String DELETE_APPLICANT = "DELETE FROM applicants WHERE id=?";
    //String UPDATE_USER_PASSWORD = "UPDATE recruiters SET password=? WHERE id=?";
    String UPDATE_APPLICANT = "UPDATE applicants SET first_name=?, last_name=?, email=?, recruiterId=? WHERE id=?";

    private Connection getConnection() throws ClassNotFoundException, SQLException {
        Class.forName(DRIVER);
        return DriverManager.getConnection(URL, USERNAME, PASSWORD);
    }

    private void closeConnection(Connection connection) throws SQLException {
        connection.close();
    }

    public Applicant findApplicantById(Integer id) throws SQLException, ClassNotFoundException {
        Applicant applicant = null;
        connection = getConnection();

        statement = connection.prepareStatement(FIND_APPLICANT_BY_ID);
        statement.setInt(1, id);
        ResultSet resultSet = statement.executeQuery();
        if(resultSet.next()) {
            applicant = new Applicant(
                    resultSet.getString("first_name"),
                    resultSet.getString("last_name"),
                    resultSet.getString("email"),
                    resultSet.getInt("recruiterId")
            );
        }
        closeConnection(connection);
        return applicant;
    }

    public Integer deleteApplicant(Integer applicantId) throws SQLException, ClassNotFoundException {
        Integer rowsDeleted = 0;
        connection = getConnection();

        statement = connection.prepareStatement(DELETE_APPLICANT);
        statement.setInt(1, applicantId);
        rowsDeleted = statement.executeUpdate();
        closeConnection(connection);
        return rowsDeleted;
    }

    public Integer updateApplicant(Integer applicantId, Applicant newApplicant) throws SQLException, ClassNotFoundException {
        Integer rowsUpdated = 0;
        connection = getConnection();

        statement = connection.prepareStatement(UPDATE_APPLICANT);
        statement.setString(1, newApplicant.getFirstName());
        statement.setString(2, newApplicant.getLastName());
        statement.setString(3, newApplicant.getEmail());
        statement.setInt(4, applicantId);
        rowsUpdated = statement.executeUpdate();
        closeConnection(connection);
        return rowsUpdated;
    }

    public List<Applicant> findAllApplicants() throws ClassNotFoundException, SQLException {
        List<Applicant> applicants = new ArrayList<Applicant>();
        connection = getConnection();

        statement = connection.prepareStatement(FIND_ALL_APPLICANTS);
        ResultSet resultSet = statement.executeQuery();
        while (resultSet.next()) {
            Applicant applicant = new Applicant(
                    resultSet.getString("first_name"),
                    resultSet.getString("last_name"),
                    resultSet.getString("email"),
                    resultSet.getInt("recruiterId")
            );
            applicants.add(applicant);
        }
        closeConnection(connection);
        return applicants;

    }
    public Integer createApplicant(Applicant newApplicant)
            throws ClassNotFoundException, SQLException {
        Integer rowsInserted = 0;
        connection = getConnection();
        statement = connection.prepareStatement(CREATE_APPLICANT);
        statement.setString(1, newApplicant.getFirstName());
        statement.setString(2, newApplicant.getLastName());
        statement.setString(3, newApplicant.getEmail());
        statement.setInt(4, newApplicant.getRecruiterId());
        rowsInserted = statement.executeUpdate();
        closeConnection(connection);
        return rowsInserted;
    }
    public static void main(String[] args) throws SQLException, ClassNotFoundException {
        ApplicantJdbcDao dao = new ApplicantJdbcDao();

        Applicant adam =
                new Applicant("Adam", "Smith", "adamsmith@company.com",
                         1);
        Applicant thomas =
                new Applicant("Thomas", "Sowell", "thomassowell@gmail.com",
                         2);
        Applicant catherine =
                new Applicant("Catherine", "Wood", "cathiewood@gmail.com",
                         3);

        dao.createApplicant(adam);
        dao.createApplicant(thomas);
        dao.createApplicant(catherine);

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

    }
}
