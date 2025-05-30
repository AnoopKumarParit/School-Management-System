package com.itech.student_management_system.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.itech.student_management_system.dto.Admin;

public interface AdminRepository extends JpaRepository<Admin, Integer>{
	@Query("Select u from Admin u where u.email=?1 and u.password=?2")
	public Admin loginAdmin(String email,String password);
}
