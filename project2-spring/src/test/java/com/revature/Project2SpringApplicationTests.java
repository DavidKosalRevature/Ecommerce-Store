package com.revature;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.revature.entity.User;
import com.revature.repository.UserRepository;

import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import lombok.Builder;

@SpringBootTest
class Project2SpringApplicationTests {

	@Autowired
    private UserRepository userRepository;

//	@Builder
    @Test
    public void saveUser() {
        User user = User.builder()
                .firstName("Leyla")
                .lastName("Shams")
                .emailId("l@gmail.com")
                .username("leyla123")
                .password("123")
                .type("customer")
                .build();
//    	User user = new User();
//    	user.setFirstName("Leyla");
        userRepository.save(user);
    }


//
//    @Test
//    public void displayAllUsers() {
//        List<User> userList = userRepository.findAll();
//        System.out.println(userList);
//    }
//
//    @Test
//    public void displayUserByFirstName() {
//        List<User> userList = userRepository.findByFirstName("Leyla");
//        System.out.println(userList);
//    }
//
    @Test
    public void displayUserByFirstNameContaining() {
        List<User> userList = userRepository.findByFirstNameContaining("Leyla");
        System.out.println(userList);
    }
//
//
//
//    @Test
//    public void displayGetUserByEmailAddress() {
//        User user = userRepository.getUserByEmailAddress("l@gmail.com");
//        System.out.println(user);
//    }
//
//    @Test
//    public void displayGetUserNameByEmailAddress() {
//        String name = userRepository.getUserFirstNameByEmailAddress("l@gmail.com");
//        System.out.println(name);
//    }
//
//    @Test
//    public void displayGetUserByEmailAddressNative() {
//        User user = userRepository.getUserByEmailAddressNative("l@gmail.com");
//        System.out.println(user);
//    }
//
//    @Test
//    public void displayGetUserByEmailAddressNativeNamedParams() {
//        User user = userRepository.getUserByEmailAddressNativeNamedParams("l@gmail.com");
//        System.out.println(user);
//    }
//
//    @Test
//    public void TestFor_updateUserNameByEmailAddress(){
//        userRepository.updateUserNameByEmailId(
//                "Leyla200",
//                "l@gmail.com"
//        );
//    }
}
