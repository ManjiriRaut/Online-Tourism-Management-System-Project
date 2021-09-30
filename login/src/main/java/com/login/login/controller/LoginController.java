package com.login.login.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.login.login.domain.Login;
import com.login.login.domain.ValidUser;
import com.login.login.entity.User;
import com.login.login.service.UserService;

@RestController
@RequestMapping("/login")
public class LoginController {
	
	@Autowired
	private UserService userService;
	
	@CrossOrigin(origins="http://localhost:3000")
	@RequestMapping(value="/getLogin", method = RequestMethod.POST)
	public ValidUser getLoginSuccess(@RequestBody Login login ) {
		Optional<User> user = userService.getUserIfAlreadyPresent(login.getUsername());
		if(user.isPresent()) {
			return ValidUser.returnValidUser(user.get());
		} else {
			return ValidUser.returnNotValidUser();
		}
		
	}
	
	@CrossOrigin(origins="http://localhost:3000")
	@RequestMapping(value="/saveUser", method = RequestMethod.POST)
	public ValidUser saveUser(@RequestBody User user ) {
		
		if(userService.getUserIfAlreadyPresent(user.getUsername()).isPresent()) {
			return ValidUser.returnNotValidUser();
		}
		userService.saveUser(user);
		return ValidUser.returnValidUser(user);
	}
	
	@CrossOrigin(origins="http://localhost:3000")
	@GetMapping
	public List<User> getAllUsers() {
		return userService.getAllUsers();
	}

}
