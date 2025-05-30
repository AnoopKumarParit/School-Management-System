package com.itech.student_management_system.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.itech.student_management_system.dto.Student;

public interface StudentRepo extends JpaRepository<Student, Integer>{
	@Query("select u from Student u where u.email=?1 and u.password=?2")
	public Student login(String emailId,String password);
}
