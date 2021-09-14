package repository;
import org.springframework.data.jpa.repository.JpaRepository;
//
//import com.revature.spring.data.jpa.demo.User;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.revature.User;
import javax.transaction.Transactional;
import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    public List<User> findByFirstName(String firstname);

    public List<User> findByFirstNameContaining(String name);

    public List<User> findByLastNameNotNull();


    User findByFirstNameAndLastName(String firstName, String lastName);

    // JPQL
    @Query("select u from User u where u.emailId= ?1")
    User getUsertByEmailAddress(String email);

    @Query("select u.firstName from User u where u.emailId=?1")
    String getUserFirstNameByEmailAddress(String emailId);

    // Native
    @Query(
            value = "SELECT * from user u where u.email_address = ?1",
            nativeQuery = true
    )
    User getUserByEmailAddressNative(String emailId);

    // native named params
    @Query(
            value = "SELECT * from user u where u.email_address = :emailId",
            nativeQuery = true
    )
    User getUserByEmailAddressNativeNamedParams(
            @Param("emailId") String emailId
    );

    @Modifying
    @Transactional
    @Query(
            value = "update user set first_name = ?1 where email_address = ?2",
            nativeQuery = true
    )
    int updateUserNameByEmailId(String firstName, String emailId);


}
