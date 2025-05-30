 package com.itech.student_management_system.dao;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.itech.student_management_system.dto.Course;
import com.itech.student_management_system.repository.CourseRepository;

@Repository
public class CourseDao {
	@Autowired
	private CourseRepository courseRepo;
	
	public List<Course> saveCourse(List<Course> course){
		List<Course> listcourse = new ArrayList<>();
		for(Course incourse:course) {
			listcourse.add(courseRepo.save(incourse));
		}
		return listcourse;
	}
	
	public List<Course> getAllCourses(){
		return courseRepo.findAll();
	}
	
	public Boolean removeCourse(int cid){
			if(courseRepo.findById(cid) != null) {
				courseRepo.deleteById(cid);
				return true;
			}
			else
				return false;
	}
}
