package com.itech.student_management_system.service;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.itech.student_management_system.dao.StudentDao;
import com.itech.student_management_system.dto.Course;
import com.itech.student_management_system.dto.Student;
import com.itech.student_management_system.exception.EmailAlreadyPresent;
import com.itech.student_management_system.exception.IdNotFound;
import com.itech.student_management_system.util.EmailUtil;
import com.itech.student_management_system.util.ResponseStructure;
import com.itech.student_management_system.util.ResponseStructureCourse;

@Service
public class StudentService {
	@Autowired
	private StudentDao studentDao;
	@Autowired
	private EmailUtil emailUtil;
	
	ResponseStructure<Student> structure= new ResponseStructure<Student>();
	ResponseStructureCourse<Course> coursestructure= new ResponseStructureCourse<Course>();
	
	public ResponseEntity<ResponseStructure<Student>> saveStudent(Student student ){
		if(student==null) 
			throw new EmailAlreadyPresent("please check your email");
		else {
			structure.setData(studentDao.saveStudent(student));
			structure.setMsg("data saved");
			structure.setStatusCode(HttpStatus.CREATED.value());
//			emailUtil.sendConfirmationEmail(student.getEmail());
			return new ResponseEntity<ResponseStructure<Student>>(structure,HttpStatus.OK);
		}	
	}
	
	public ResponseEntity<ResponseStructure<Student>> findStudentById(int id) {
		Student studb = studentDao.findStudentById(id);
		if(studb!=null) {
			structure.setData(studb);
			structure.setMsg("data found");
			structure.setStatusCode(HttpStatus.FOUND.value());
			return new ResponseEntity<ResponseStructure<Student>>(structure,HttpStatus.FOUND);
		}
		else
			throw new IdNotFound("student id does not present");
	}
	
	public ResponseEntity<ResponseStructure<Student>> deleteStudentById(int id) {
		Student studb = studentDao.deleteStudentById(id);
		if(studb!=null) {
			structure.setData(studb);
			structure.setMsg("data found and deleted");
			structure.setStatusCode(HttpStatus.FOUND.value());
			emailUtil.sendDeletionConfirmationEmail(studb.getEmail());
			return new ResponseEntity<ResponseStructure<Student>>(structure,HttpStatus.FOUND);
		}
		else
			throw new IdNotFound("student id does not present");
	}
	

	public ResponseEntity<ResponseStructure<Student>> updateStudentPhotoById(int id, MultipartFile file) throws IOException {
		Student studb = studentDao.findStudentById(id);
		if(studb!=null) {
			studb.setId(id);
			studb.setImg(file.getBytes());
			structure.setData(studentDao.updateStudentPhotoById(studb));
			structure.setMsg("image has been updated");
			structure.setStatusCode(HttpStatus.ACCEPTED.value());
//			emailUtil.sendUpdationConfirmationEmail(studb.getEmail());
			return new ResponseEntity<ResponseStructure<Student>>(structure,HttpStatus.ACCEPTED);
		}
		else
			throw new IdNotFound("student id does not present");
	}
	
	public ResponseEntity<ResponseStructure<Student>> updateStudentById(Student student){
		Student studb = studentDao.findStudentById(student.getId());
		student.setImg(studb.getImg());
		structure.setData(studentDao.saveStudent(student));
		structure.setMsg("Updated successfully");
		structure.setStatusCode(HttpStatus.ACCEPTED.value());
//		emailUtil.sendUpdationConfirmationEmail(studb.getEmail());
		return new ResponseEntity<ResponseStructure<Student>>(structure,HttpStatus.ACCEPTED);
	}
	
	public ResponseEntity<byte[]> fetchImage(int id){
		Student studb = studentDao.findStudentById(id);
		if(studb!=null) {
			byte[] img = studb.getImg();
			HttpHeaders headers= new HttpHeaders();
			//headers.setContentType(MediaType.IMAGE_PNG);
			headers.setContentType(MediaType.IMAGE_JPEG);
			return new ResponseEntity<byte[]>(img,headers,HttpStatus.OK);
		}
		else
			throw new IdNotFound("student id is not found");
	}
	
	public ResponseEntity<ResponseStructure<Student>> login(String email,String password){
		Student studb = studentDao.login(email,password);
		if(studb!=null) {
			structure.setData(studentDao.saveStudent(studb));
			structure.setMsg("Login successfully");
			structure.setStatusCode(HttpStatus.ACCEPTED.value());
//			emailUtil.sendUpdationConfirmationEmail(studb.getEmail());
			return new ResponseEntity<ResponseStructure<Student>>(structure,HttpStatus.ACCEPTED);
		}
		else
			throw new IdNotFound("student id is not present");
	}
	public ResponseEntity<ResponseStructure<Student>> addCourseToStudent(int id,int cid){
		Student studb = studentDao.addCourseToStudent(id, cid);
		if(studb!=null) {
			structure.setData(studb);
			structure.setMsg("Course Added successfully");
			structure.setStatusCode(HttpStatus.ACCEPTED.value());
			return new ResponseEntity<ResponseStructure<Student>>(structure,HttpStatus.ACCEPTED);
		}
		else
			throw new IdNotFound("student id is not present");
	}
	
	public ResponseEntity<ResponseStructureCourse<Course>> fetchCourses(int id){
		List<Course> courses = studentDao.fetchCourses(id);
		coursestructure.setData(courses);
		coursestructure.setMsg("Fetched successfully");
		coursestructure.setStatusCode(HttpStatus.ACCEPTED.value());
		return new ResponseEntity<ResponseStructureCourse<Course>>(coursestructure,HttpStatus.ACCEPTED);
	}
	
	public ResponseEntity<ResponseStructure<Student>> removeCourseForStudent(int id,int cid){
		Student studb = studentDao.removeCourseForStudent(id, cid);
		if(studb!=null) {
			structure.setData(studb);
			structure.setMsg("Course Added successfully");
			structure.setStatusCode(HttpStatus.ACCEPTED.value());
			return new ResponseEntity<ResponseStructure<Student>>(structure,HttpStatus.ACCEPTED);
		}
		else
			throw new IdNotFound("student id is not present");
	}
}
