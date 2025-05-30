package com.itech.student_management_system.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.itech.student_management_system.dao.CourseDao;
import com.itech.student_management_system.dto.Course;
import com.itech.student_management_system.util.ResponseStructureCourse;

@Service
public class CourseService {
	@Autowired
	private CourseDao courseDao;
	
	ResponseStructureCourse<Course> structure=new ResponseStructureCourse<Course>();
	
	public ResponseEntity<ResponseStructureCourse<Course>> saveCourse(List<Course> course){
		List<Course> listCourse = courseDao.saveCourse(course);
		structure.setData(listCourse);
		structure.setMsg("Courses saved successfully");
		structure.setStatusCode(HttpStatus.CREATED.value());
		return new ResponseEntity<ResponseStructureCourse<Course>>(structure,HttpStatus.CREATED);
	}
	

	public ResponseEntity<ResponseStructureCourse<Course>> getAllCourses(){
		List<Course> listCourse = courseDao.getAllCourses();
		structure.setData(listCourse);
		structure.setMsg("Courses fetched successfully");
		structure.setStatusCode(HttpStatus.OK.value());
		return new ResponseEntity<ResponseStructureCourse<Course>>(structure,HttpStatus.OK);
	}
	
	public ResponseEntity<ResponseStructureCourse<Course>> removeCourse(int cid){
		 boolean deleted = courseDao.removeCourse(cid);
	        if (deleted) {
	        	structure.setMsg("Course deleted successfully");
	    		structure.setStatusCode(HttpStatus.OK.value());
	    		return new ResponseEntity<ResponseStructureCourse<Course>>(structure,HttpStatus.OK);
	        } else {
	        	structure.setMsg("Course not found");
	    		structure.setStatusCode(HttpStatus.NOT_FOUND.value());
	    		return new ResponseEntity<ResponseStructureCourse<Course>>(structure,HttpStatus.NOT_FOUND);
	        }
	}
}
	

