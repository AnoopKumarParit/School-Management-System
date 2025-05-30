package com.itech.student_management_system.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.itech.student_management_system.dto.Course;

public interface CourseRepository extends JpaRepository<Course, Integer>{

}
