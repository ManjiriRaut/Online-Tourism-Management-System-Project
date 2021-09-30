package com.travel.tourism.domain;

import org.springframework.stereotype.Component;

@Component
public class UserPackageRequest {

	private String userId;
	private String packageId;

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getPackageId() {
		return packageId;
	}

	public void setPackageId(String packageId) {
		this.packageId = packageId;
	}

}
