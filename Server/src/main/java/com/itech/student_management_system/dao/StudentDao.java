package com.itech.student_management_system.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.itech.student_management_system.dto.Course;
import com.itech.student_management_system.dto.Student;
import com.itech.student_management_system.repository.CourseRepository;
import com.itech.student_management_system.repository.StudentRepo;

@Repository
public class StudentDao {
	@Autowired
	private StudentRepo studentRepo;
	@Autowired
	private CourseRepository courseRepo;
	
	public Student saveStudent(Student student) {
		return studentRepo.save(student);
	}
	
	public Student findStudentById(int id) {
		Optional<Student> studentdb = studentRepo.findById(id);
		if(studentdb.isPresent())
			return studentdb.get();
		else
			return null;
	}
	
	public Student deleteStudentById(int id) {
		Optional<Student> studentdb = studentRepo.findById(id);
		if(studentdb.isPresent()) {
			studentRepo.delete(studentdb.get());
			return studentdb.get();
		}
		else
			return null;
			
	}
	
	public Student updateStudentPhotoById(Student student) {
		Optional<Student> studentdb = studentRepo.findById(student.getId());
		if(studentdb.isPresent()) {
			studentRepo.save(studentdb.get());
			return studentdb.get();
		}
		else
			return null;
			
	}
	
	public Student login(String gmail,String password) {
		return studentRepo.login(gmail,password);
	}
	
	public Student  addCourseToStudent(int id,int cid) {
		Optional<Student> studentdb = studentRepo.findById(id);
		Optional<Course> coursedb=courseRepo.findById(cid);
		if(studentdb.isPresent() && coursedb.isPresent()) {
			Student student = studentdb.get();
			Course course = coursedb.get();
			List<Course> listcourses = student.getCourse();
			listcourses.add(course);
			student.setCourse(listcourses);
			studentRepo.save(student);
			return student;
		}
		else
			return null;
	}
	
	public List<Course>  fetchCourses(int id) {
		Optional<Student> studentdb = studentRepo.findById(id);
		if(studentdb.isPresent()) {
			Student student = studentdb.get();
			List<Course> listcourses = student.getCourse();
			return listcourses;
		}
		else
			return null;
	}
	
	public Student  removeCourseForStudent(int id,int cid) {
		Optional<Student> studentdb = studentRepo.findById(id);
		Optional<Course> coursedb=courseRepo.findById(cid);
		if(studentdb.isPresent() && coursedb.isPresent()) {
			Student student = studentdb.get();
			Course course = coursedb.get();
			List<Course> listcourses = student.getCourse();
			listcourses.remove(course);
			student.setCourse(listcourses);
			studentRepo.save(student);
			return student;
		}
		else
			return null;
	}
	
	
}
