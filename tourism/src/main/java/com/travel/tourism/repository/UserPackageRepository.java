package com.travel.tourism.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.travel.tourism.entity.UserPackage;

@Repository
public interface UserPackageRepository extends JpaRepository<UserPackage, String> {
	
	@Query(value ="SELECT * FROM user_package WHERE user_id= ?1 ", nativeQuery = true)
	public List<UserPackage> findAllRecordsByUserId(@Param("userId") String userId);
	
	public void deleteAllByPackageId(String packageId);

	public void deleteAllByUserId(String userId);
	
	@Query(value ="SELECT * FROM user_package WHERE user_id= ?1 and package_id= ?2 ", nativeQuery = true)
	public List<UserPackage> findAllRecordsByUserIdAndPackageId(@Param("userId") String userId, @Param("packageId") String packageId);

}
