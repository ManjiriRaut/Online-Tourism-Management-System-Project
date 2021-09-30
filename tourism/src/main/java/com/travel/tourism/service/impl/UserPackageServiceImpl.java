package com.travel.tourism.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.travel.tourism.entity.UserPackage;
import com.travel.tourism.repository.UserPackageRepository;
import com.travel.tourism.service.UserPackageService;

@Service
public class UserPackageServiceImpl implements UserPackageService {

	@Autowired
	private UserPackageRepository uprepo;

	@Override
	public void saveUserPackage(UserPackage userPackageRequest) {
		uprepo.save(userPackageRequest);
	}

	@Override
	public void deleteUserPackages(String userId) {
		uprepo.deleteAllByUserId(userId);
	}

	@Override
	public void deletePackage(String packageId) {
		uprepo.deleteAllByUserId(packageId);
	}

	@Override
	public List<UserPackage> isAlreadySubscribed(String userId, String packageId) {
		return uprepo.findAllRecordsByUserIdAndPackageId(userId, packageId);
	}

}
