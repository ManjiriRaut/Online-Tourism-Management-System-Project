package com.travel.tourism.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.travel.tourism.entity.Package;
import com.travel.tourism.entity.UserPackage;
import com.travel.tourism.repository.PackageRepository;
import com.travel.tourism.repository.UserPackageRepository;
import com.travel.tourism.service.PackageService;
import com.travel.tourism.service.UserPackageService;

@Service
public class PackageServiceImpl implements PackageService {

	@Autowired
	private PackageRepository packageRepo;

	@Autowired
	private UserPackageRepository userPackageRepo;

	@Autowired
	private UserPackageService userPackageService;

	@Override
	public void savePackage(Package packageRequest) {
		packageRepo.save(packageRequest);
	}

	@Override
	public List<Package> getAllPackages() {
		return packageRepo.findAll();
	}

	@Override
	public List<Package> getUserSpecificPackages(String userId) {
		List<UserPackage> userPackages = userPackageRepo.findAllRecordsByUserId(userId);
		List<Package> packages = new ArrayList<>();
		for (UserPackage userPackage : userPackages) {
			Optional<Package> packageRes = packageRepo.findById(userPackage.getPackageId());
			if (packageRes.isPresent()) {
				packages.add(packageRes.get());
			}
		}
		return packages;
	}

	@Override
	public void deletePackage(String packageId) {
		packageRepo.deleteById(packageId);
		userPackageService.deletePackage(packageId);
	}

}
