package com.travel.tourism.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.travel.tourism.domain.DeletePackage;
import com.travel.tourism.entity.Package;
import com.travel.tourism.service.PackageService;

@RestController
@RequestMapping("/package")
public class PackageController {
	
	@Autowired
	private PackageService packageService;

	@CrossOrigin(origins="http://localhost:3000")
	@RequestMapping(value = "/savepackage", method = RequestMethod.POST)
	public void savePackageInfo(@RequestBody Package packageRequest) {
		packageService.savePackage(packageRequest);
	}
	
	@CrossOrigin(origins="http://localhost:3000")
	@RequestMapping(value = "/getUserPackages", method = RequestMethod.GET)
	public List<Package> getAllUserPackages(String userId){
		return packageService.getUserSpecificPackages(userId);
	}
	
	@CrossOrigin(origins="http://localhost:3000")
	@GetMapping
	public List<Package> getAllPackages(){
		return packageService.getAllPackages();
	}
	
	@CrossOrigin(origins="http://localhost:3000")
	@RequestMapping(value = "/deletepackage", method = RequestMethod.POST)
	public void deletePackage(@RequestBody DeletePackage pkg) {
		packageService.deletePackage(pkg.getPackageId());
	}
}
