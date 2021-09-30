package com.travel.tourism.domain;

import org.springframework.stereotype.Component;

@Component
public class DeletePackage {
	
	private String packageId;

	public String getPackageId() {
		return packageId;
	}

	public void setPackageId(String packageId) {
		this.packageId = packageId;
	}
	
}
