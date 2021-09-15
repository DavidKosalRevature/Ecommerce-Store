package com.revature.controller;


import lombok.Getter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.revature.entity.User;
import com.revature.service.UserService;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200/")
@RestController
public class UserController {
    @Autowired
    private UserService service;

    @PostMapping("/users")
    public User saveUser(@RequestBody User user) {
        return service.saveUser(user);
    }

    @GetMapping("/users")
    public List<User> getUser() {
        return service.getAllUser();
    }

    @GetMapping("/users/{id}")
    public User getUserById(@PathVariable("id") long userId) {
        return service.getUserById(userId);
    }

    @DeleteMapping("/users/{id}")
    public User deleteUser(@PathVariable("id") long userId) {
        return service.deleteUser(userId);
    }

    @PutMapping("/users/{id}")
    public User updateUser(@PathVariable("id") long userId, @RequestBody User user) {
        return service.updateUser(userId, user);
    }

}
