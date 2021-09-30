package com.login.login.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.login.login.entity.User;

@Service
public interface UserService {
	
	public List<User> getAllUsers();
	
	public Optional<User> getUser(String id);
	
	public Optional<User> getUserIfAlreadyPresent(String username);
	
	public void saveUser(User user);
	
}
