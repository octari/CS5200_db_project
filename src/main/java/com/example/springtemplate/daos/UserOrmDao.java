package com.example.springtemplate.daos;

import com.example.springtemplate.models.User;
import com.example.springtemplate.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UserOrmDao {
    @Autowired
    UserRepository userRepository;

    @GetMapping("/orm/users/create/{fn}/{ln}/{un}/{pw}")
    public User createUser(
            @PathVariable("fn")String first,
            @PathVariable("ln")String last,
            @PathVariable("un")String uname,
            @PathVariable("pw")String pass) {
        User user = new User(first, last, uname, pass, null);
        return userRepository.save(user);
    }

    @GetMapping("/orm/users/find")
    public List<User> findAllUsers() {
        return userRepository.findAllUsers();
    }

    @GetMapping("/orm/users/find/id/{userId}")
    public User findUserById(
            @PathVariable("userId") Integer id) {
        return userRepository.findUserById(id);
    }

    @GetMapping("/orm/users/delete/{userId}")
    public void deleteUser(
            @PathVariable("userId")Integer id) {
        userRepository.deleteById(id);
    }

    @GetMapping("/orm/users/update/{userId}/{password}")
    public User updateUser(
            @PathVariable("userId") Integer id,
            @PathVariable("password")String newPass
    ) {
        User user = userRepository.findUserById(id);
        user.setPassword(newPass);
        return userRepository.save(user);
    }
}
