package com.revature.indexnotfound.Project2.Repository;

import com.revature.indexnotfound.Project2.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

//    @Query(value = "", nativeQuery = true)
//    public User findByUserName(String userName);
//
//    public User findByUserNameIgnoreCase(String userName);

}
