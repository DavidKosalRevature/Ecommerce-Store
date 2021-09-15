package com.revature.service;


import org.springframework.stereotype.Service;

import com.revature.entity.User;

import java.util.List;

@Service
public interface UserService {
	
    User saveUser(User user);
    List<User> getAllUser();	
    User getUserById(long userId);
    User deleteUser(long userId);
    User updateUser(long userId, User user);

}
