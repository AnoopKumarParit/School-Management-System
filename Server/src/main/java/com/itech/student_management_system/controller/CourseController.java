package com.itech.student_management_system.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.itech.student_management_system.dto.Course;
import com.itech.student_management_system.service.CourseService;
import com.itech.student_management_system.util.ResponseStructureCourse;

@RestController
@CrossOrigin
public class CourseController {
	@Autowired
	private CourseService courseService;
	
	@PostMapping("/saveCourse")
	public ResponseEntity<ResponseStructureCourse<Course>> saveCourse(@RequestBody List<Course> course) {
		return courseService.saveCourse(course);
	}
	
	@GetMapping("/getAllCourse")
	public ResponseEntity<ResponseStructureCourse<Course>> getAllCourse() {
		return courseService.getAllCourses();
	}
	
	@DeleteMapping("/deleteCourse/{cid}")
	public ResponseEntity<ResponseStructureCourse<Course>> removeCourse(@PathVariable int cid) {
		return courseService.removeCourse(cid);
	}
}
