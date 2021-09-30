package com.travel.tourism.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.travel.tourism.entity.Package;

@Service
public interface PackageService {

	  public void savePackage(Package packageRequest);
	  
	  public List<Package> getAllPackages();
	  
	  public List<Package> getUserSpecificPackages(String userId);
	  
	  public void deletePackage(String packageId);
	  
}
