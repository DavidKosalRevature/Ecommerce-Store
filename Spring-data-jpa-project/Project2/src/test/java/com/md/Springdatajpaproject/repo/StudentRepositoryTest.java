package com.md.Springdatajpaproject.repo;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@SpringBootTest
class StudentRepositoryTest {


    @Autowired
    private StudentRepository studentRepository;

    @Test
    public void saveStudent() {
        Student student = Student.builder()
                .firstName("md")
                .lastName("uddin")
                .email("m@gmail.com")
//                .parentName("Rokeya")
//                .parentEmail("r@gmail.com")
//                .parentPnone("1236544")
                .build();
        studentRepository.save(student);
    }

    @Test
    public void saveStudentWithParent() {
        Parent parent = Parent.builder()
                .name("Haider")
                .email("h@gmail.com")
                .phone("3473221230")
                .build();

        Student student = Student.builder()
                .firstName("mahi")
                .lastName("shihab")
                .email("sh@gmail.com")
                .parent(parent)
                .build();

        studentRepository.save(student);

    }

    @Test
    public void displayAllStudent() {
        List<Student> students = studentRepository.findAll();
        System.out.println(students);
    }

    @Test
    public void findStudentByFirstName() {
        List<Student> students = studentRepository.findByFirstName("md");
        System.out.println(students);
    }

    @Test
    public void findStudentByFirstNameContaining() {
        List<Student> students = studentRepository.findByFirstNameContaining("m");
        System.out.println(students);
    }

    @Test
    public void findStudentByParentName() {
        List<Student> students = studentRepository.findByParentName("Haider");
        System.out.println(students);
    }

    @Test
    public void findByStudentFirstNameLike() {
        List<Student> students = studentRepository.findByLastNameLike("uddin");
        System.out.println(students);
    }

    ////JPA Query
    @Test
    public void displayGetStudentByEmailId() {
        Student students = studentRepository.getStudentByEmailId("m@gmail.com");
        System.out.println(students);
    }

    @Test
    public void displayGetStudentFirstNameByEmail() {
        String name = studentRepository.getStudentFirstNameByEmail("m@gmail.com");
        System.out.println(name);
    }

    // Native
    @Test
    public void displayGetStudentByEmailAddressNative() {
        Student student = studentRepository.getStudentByEmailAddressNative("sh@gmail.com");
        System.out.println(student);
    }


    //Native named params
    @Test
    public void displayGetStudentByEmailAddressNativeNamedParams() {
        Student student = studentRepository.getStudentByEmailNativeNamedParams("sh@gmail.com");
        System.out.println(student);
    }
    @Test
    public void TestFor_updateStudentNameByEmail(){
        studentRepository.updateStudentNameByEmail("Emahi","m@gmail.com");
    }

}