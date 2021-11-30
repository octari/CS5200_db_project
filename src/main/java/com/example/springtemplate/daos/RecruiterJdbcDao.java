package com.example.springtemplate.daos;

import com.example.springtemplate.models.Recruiter;

import java.sql.*;
import java.util.*;

public class RecruiterJdbcDao {
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
    String CREATE_RECRUITER = "INSERT INTO recruiters VALUES (null, ?, ?, ?, ?, ?)";
    String FIND_ALL_RECRUITERS = "SELECT * FROM recruiters";
    String FIND_RECRUITER_BY_ID = "SELECT * FROM recruiters WHERE id=?";
    String DELETE_RECRUITER = "DELETE FROM recruiters WHERE id=?";
    //String UPDATE_USER_PASSWORD = "UPDATE recruiters SET password=? WHERE id=?";
    String UPDATE_RECRUITER = "UPDATE recruiters SET first_name=?, last_name=?, email=?, phone=?, companyId=? WHERE id=?";

    private Connection getConnection() throws ClassNotFoundException, SQLException {
        Class.forName(DRIVER);
        return DriverManager.getConnection(URL, USERNAME, PASSWORD);
    }

    private void closeConnection(Connection connection) throws SQLException {
        connection.close();
    }

    public Recruiter findRecruiterById(Integer id) throws SQLException, ClassNotFoundException {
        Recruiter recruiter = null;
        connection = getConnection();

        statement = connection.prepareStatement(FIND_RECRUITER_BY_ID);
        statement.setInt(1, id);
        ResultSet resultSet = statement.executeQuery();
        if(resultSet.next()) {
            recruiter = new Recruiter(
                    resultSet.getString("first_name"),
                    resultSet.getString("last_name"),
                    resultSet.getString("email"),
                    resultSet.getInt("phone"),
                    resultSet.getInt("companyId")
            );
        }
        closeConnection(connection);
        return recruiter;
    }

    public Integer deleteRecruiter(Integer recruiterId) throws SQLException, ClassNotFoundException {
        Integer rowsDeleted = 0;
        connection = getConnection();

        statement = connection.prepareStatement(DELETE_RECRUITER);
        statement.setInt(1, recruiterId);
        rowsDeleted = statement.executeUpdate();
        closeConnection(connection);
        return rowsDeleted;
    }

    public Integer updateRecruiter(Integer recruiterId, Recruiter newRecruiter) throws SQLException, ClassNotFoundException {
        Integer rowsUpdated = 0;
        connection = getConnection();

        statement = connection.prepareStatement(UPDATE_RECRUITER);
        statement.setString(1, newRecruiter.getFirstName());
        statement.setString(2, newRecruiter.getLastName());
        statement.setString(3, newRecruiter.getEmail());
        statement.setInt(4, newRecruiter.getPhone());
        statement.setInt(4, newRecruiter.getCompanyId());
        statement.setInt(5, recruiterId);
        rowsUpdated = statement.executeUpdate();
        closeConnection(connection);
        return rowsUpdated;
    }

    public List<Recruiter> findAllRecruiters() throws ClassNotFoundException, SQLException {
        List<Recruiter> recruiters = new ArrayList<Recruiter>();
        connection = getConnection();

        statement = connection.prepareStatement(FIND_ALL_RECRUITERS);
        ResultSet resultSet = statement.executeQuery();
        while (resultSet.next()) {
            Recruiter recruiter = new Recruiter(
                    resultSet.getString("first_name"),
                    resultSet.getString("last_name"),
                    resultSet.getString("email"),
                    resultSet.getInt("phone"),
                    resultSet.getInt("companyId")
            );
            recruiters.add(recruiter);
        }
        closeConnection(connection);
        return recruiters;

    }
    public Integer createRecruiter(Recruiter newRecruiter)
            throws ClassNotFoundException, SQLException {
        Integer rowsInserted = 0;
        connection = getConnection();
        statement = connection.prepareStatement(CREATE_RECRUITER);
        statement.setString(1, newRecruiter.getFirstName());
        statement.setString(2, newRecruiter.getLastName());
        statement.setString(3, newRecruiter.getEmail());
        statement.setInt(4, newRecruiter.getPhone());
        statement.setInt(5, newRecruiter.getCompanyId());
        rowsInserted = statement.executeUpdate();
        closeConnection(connection);
        return rowsInserted;
    }
    public static void main(String[] args) throws SQLException, ClassNotFoundException {
        RecruiterJdbcDao dao = new RecruiterJdbcDao();

        Recruiter adam =
                new Recruiter("Adam", "Smith", "adamsmith@company.com",
                        1234567890, 1);
        Recruiter thomas =
                new Recruiter("Thomas", "Sowell", "thomassowell@gmail.com",
                        1234567891, 2);
        Recruiter catherine =
                new Recruiter("Catherine", "Wood", "cathiewood@gmail.com",
                        1234567892, 3);

        dao.createRecruiter(adam);
        dao.createRecruiter(thomas);
        dao.createRecruiter(catherine);

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
