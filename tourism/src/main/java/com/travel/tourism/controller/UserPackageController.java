package com.travel.tourism.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.travel.tourism.domain.ResponseSuccess;
import com.travel.tourism.domain.UserPackageRequest;
import com.travel.tourism.entity.UserPackage;
import com.travel.tourism.service.UserPackageService;

@RestController
@RequestMapping("/userpackage")
public class UserPackageController {
	
	@Autowired
	private UserPackageService userPackageService;
	
	@CrossOrigin(origins="http://localhost:3000")
	@RequestMapping(value = "/saveuserpackage", method = RequestMethod.POST)
	public ResponseSuccess saveUserPackage(@RequestBody UserPackageRequest userPackageRequest) {
		List<UserPackage> userPackageList =userPackageService.isAlreadySubscribed(userPackageRequest.getUserId(),userPackageRequest.getPackageId());
		if(!userPackageList.isEmpty()) {
			ResponseSuccess response = new ResponseSuccess();
			response.setSuccess(false);
			return response;
		}
		UserPackage userPackage = new UserPackage();
		userPackage.setUserId(userPackageRequest.getUserId());
		userPackage.setPackageId(userPackageRequest.getPackageId());
		userPackageService.saveUserPackage(userPackage);
		ResponseSuccess response = new ResponseSuccess();
		response.setSuccess(true);
		return response;
	}
	
	@CrossOrigin(origins="http://localhost:3000")
	@RequestMapping(value = "/deletepackage", method = RequestMethod.POST)
	public void deleteUserPackage(@RequestParam String packageId) {
		userPackageService.deletePackage(packageId);
	}
	
	@CrossOrigin(origins="http://localhost:3000")
	@RequestMapping(value = "/deleteuserpackage", method = RequestMethod.POST)
	public void deleteUser(@RequestParam String userId) {
		userPackageService.deleteUserPackages(userId);
	}

}
