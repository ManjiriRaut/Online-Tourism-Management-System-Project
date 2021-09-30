package com.travel.tourism.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.travel.tourism.entity.UserPackage;

@Service
public interface UserPackageService {
	
	public void saveUserPackage(UserPackage userPackageRequest);
	
	public void deleteUserPackages(String userId);
	
	public void deletePackage(String packageId);
	
	public List<UserPackage> isAlreadySubscribed(String userId, String packageId);

}
