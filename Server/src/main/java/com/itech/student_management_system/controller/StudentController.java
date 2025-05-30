package com.itech.student_management_system.controller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.itech.student_management_system.dto.Course;
import com.itech.student_management_system.dto.Student;
import com.itech.student_management_system.service.StudentService;
import com.itech.student_management_system.util.ResponseStructure;
import com.itech.student_management_system.util.ResponseStructureCourse;
@RestController
@CrossOrigin
public class StudentController {
	@Autowired
	private StudentService studentService;
	
	@PostMapping("/saveStudent")
	private ResponseEntity<ResponseStructure<Student>> saveStudent(@RequestBody Student student) {
		return studentService.saveStudent(student);
	}
	
	@GetMapping("/findById/{id}")
	public ResponseEntity<ResponseStructure<Student>> findStudentById(@PathVariable int id) {
		return studentService.findStudentById(id);
	}
	
	@DeleteMapping("/deleteById/{id}")
	public ResponseEntity<ResponseStructure<Student>> deleteStudentById(@PathVariable int id) {
		return studentService.deleteStudentById(id);
	}
	
	@PutMapping("/uploadImageById/{id}")
	public ResponseEntity<ResponseStructure<Student>> updateStudentPhotoById(@PathVariable int id,@RequestBody MultipartFile file) throws IOException {
		return studentService.updateStudentPhotoById(id,file);
	}
	
	@GetMapping("/getImageById/{id}")
	public ResponseEntity<byte[]> fetchImage(@PathVariable int id){
		return studentService.fetchImage(id);
	}
	
	@PutMapping("/addCourseToStudent")
	public ResponseEntity<ResponseStructure<Student>> addCourseToStudent(@RequestParam int id,@RequestParam int cid) {
		return studentService.addCourseToStudent(id, cid);
	}
	
	@PostMapping("/login")
	private ResponseEntity<ResponseStructure<Student>> login(@RequestParam String email,@RequestParam String password) {
		return studentService.login(email,password);
	}
	
	@GetMapping("/fetchCourses/{id}")
	private ResponseEntity<ResponseStructureCourse<Course>> fetchCourse(@PathVariable int id){
		return studentService.fetchCourses(id);
	}
	
	@PutMapping("/removeCourseToStudent/{id}/{cid}")
	public ResponseEntity<ResponseStructure<Student>> removeCourseToStudent(@PathVariable int id,@PathVariable int cid) {
		return studentService.removeCourseForStudent(id, cid);
	}
	
}
