package com.login.login.domain;

import org.springframework.stereotype.Component;

import com.login.login.entity.User;

@Component
public class ValidUser {

	private String username;
	private String userId;
	private String email;
	private String fname;
	private String lname;
	private int mobileNumber;
	private String role;
	private boolean isDeleted;
	private boolean isValid;

	public static ValidUser returnValidUser(User user) {
		ValidUser validUser = new ValidUser();
		validUser.setValid(true);
		validUser.setEmail(user.getEmail());
		validUser.setFname(user.getFname());
		validUser.setLname(user.getLname());
		validUser.setMobileNumber(user.getMobileNumber());
		validUser.setDeleted(user.isDeleted());
		validUser.setRole(user.getRole());
		validUser.setUserId(user.getId());
		validUser.setUsername(user.getUsername());
		return validUser;
	}

	public static ValidUser returnNotValidUser() {
		ValidUser validUser = new ValidUser();
		validUser.setValid(false);
		return validUser;
	}

	public boolean isValid() {
		return isValid;
	}

	public void setValid(boolean isValid) {
		this.isValid = isValid;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getFname() {
		return fname;
	}

	public void setFname(String fname) {
		this.fname = fname;
	}

	public String getLname() {
		return lname;
	}

	public void setLname(String lname) {
		this.lname = lname;
	}

	public int getMobileNumber() {
		return mobileNumber;
	}

	public void setMobileNumber(int mobileNumber) {
		this.mobileNumber = mobileNumber;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public boolean isDeleted() {
		return isDeleted;
	}

	public void setDeleted(boolean isDeleted) {
		this.isDeleted = isDeleted;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

}
