package com.travel.tourism.domain;

import org.springframework.stereotype.Component;

@Component
public class ResponseSuccess {
	private boolean isSuccess;

	public boolean isSuccess() {
		return isSuccess;
	}

	public void setSuccess(boolean isSuccess) {
		this.isSuccess = isSuccess;
	}

}
