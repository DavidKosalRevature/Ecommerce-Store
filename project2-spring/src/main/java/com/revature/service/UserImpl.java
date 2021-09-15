package com.revature.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Optional;

import com.revature.entity.User;
import com.revature.repository.UserRepository;

@Service
public class UserImpl implements UserService{
	
    @Autowired
    private UserRepository repository;

    @Override
    public User saveUser(User user) {
        return repository.save(user);
    }

    @Override
    public List<User> getAllUser() {
        return repository.findAll();
    }

    @Override
    public User getUserById(long userId) {
        Optional<User> user =  repository.findById(userId);
        if(!user.isPresent()){
            // handler the error
        	System.out.println("user dose't exist");
        }
        return user.get();
    }

    @Override
    public User deleteUser(long userId) {
    	User userDB = repository.findById(userId).get();
        repository.delete(userDB);
        return userDB;
    }

    @Override
    public User updateUser(long userId, User user) {
    	User userDB = repository.findById(userId).get();
        userDB.setFirstName(user.getFirstName());
        userDB.setEmailId(user.getEmailId());
        return repository.save(userDB);

    }



}
