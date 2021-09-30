package com.login.login.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.login.login.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, String>{
	
	@Override
	@Query("select u from User u where u.isDeleted=false")
	public List<User> findAll();
	
	@Query(value ="SELECT * FROM user WHERE username= ?1 ", nativeQuery = true)
	public Optional<User> findByUsernameForDuplicate(String username);

}
