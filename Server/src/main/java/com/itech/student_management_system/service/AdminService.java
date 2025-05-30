package com.itech.student_management_system.service;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.itech.student_management_system.dao.AdminDao;
import com.itech.student_management_system.dto.Admin;
import com.itech.student_management_system.exception.EmailAlreadyPresent;
import com.itech.student_management_system.exception.IdNotFound;
import com.itech.student_management_system.util.ResponeStructureAdmin;

@Service
public class AdminService {
	@Autowired
	private AdminDao adminDao;
	@Autowired
	ResponeStructureAdmin<Admin> structure = new ResponeStructureAdmin<Admin>();
	
	public ResponseEntity<ResponeStructureAdmin<Admin>> saveAdmin(Admin admin ){
		if(admin==null) 
			throw new EmailAlreadyPresent("please check your email");
		else {
			structure.setData(adminDao.saveAdmin(admin));
			structure.setMsg("data saved");
			structure.setStatusCode(HttpStatus.CREATED.value());
			return new ResponseEntity<ResponeStructureAdmin<Admin>>(structure,HttpStatus.OK);
		}	
	}

	public ResponseEntity<ResponeStructureAdmin<Admin>> loginAdmin(String email,String password){
		Admin admin = adminDao.loginAdmin(email, password);
		if(admin!=null) {
			structure.setData(admin);
			structure.setMsg("data fetched successsfully");
			structure.setStatusCode(HttpStatus.FOUND.value());
			return new ResponseEntity<ResponeStructureAdmin<Admin>>(structure,HttpStatus.FOUND );
		}
		else {
			throw new EmailAlreadyPresent("please check your email");
		}	
	}
	
	public ResponseEntity<ResponeStructureAdmin<Admin>> findAdminById(int id) {
		Admin studb = adminDao.findAdminById(id);
		if(studb!=null) {
			structure.setData(studb);
			structure.setMsg("data found");
			structure.setStatusCode(HttpStatus.FOUND.value());
			return new ResponseEntity<ResponeStructureAdmin<Admin>>(structure,HttpStatus.FOUND);
		}
		else
			throw new IdNotFound("student id does not present");
	}
	
	public ResponseEntity<ResponeStructureAdmin<Admin>> deleteAdminById(int id) {
		Admin studb = adminDao.deleteAdminById(id);
		if(studb!=null) {
			structure.setData(studb);
			structure.setMsg("data found and deleted");
			structure.setStatusCode(HttpStatus.FOUND.value());
//			emailUtil.sendDeletionConfirmationEmail(studb.getEmail());
			return new ResponseEntity<ResponeStructureAdmin<Admin>>(structure,HttpStatus.FOUND);
		}
		else
			throw new IdNotFound("student id does not present");
	}
	

	public ResponseEntity<ResponeStructureAdmin<Admin>> updateAdminPhotoById(int id, MultipartFile file) throws IOException {
		Admin studb = adminDao.findAdminById(id);
		if(studb!=null) {
			studb.setAid(id);
			studb.setImg(file.getBytes());
			structure.setData(adminDao.updateAdminPhotoById(studb));
			structure.setMsg("image has been updated");
			structure.setStatusCode(HttpStatus.ACCEPTED.value());
//			emailUtil.sendUpdationConfirmationEmail(studb.getEmail());
			return new ResponseEntity<ResponeStructureAdmin<Admin>>(structure,HttpStatus.ACCEPTED);
		}
		else
			throw new IdNotFound("student id does not present");
	}
	
	public ResponseEntity<ResponeStructureAdmin<Admin>> updateAdminById(Admin student){
		Admin studb = adminDao.findAdminById(student.getAid());
		student.setImg(studb.getImg());
		structure.setData(adminDao.saveAdmin(student));
		structure.setMsg("Updated successfully");
		structure.setStatusCode(HttpStatus.ACCEPTED.value());
//		emailUtil.sendUpdationConfirmationEmail(studb.getEmail());
		return new ResponseEntity<ResponeStructureAdmin<Admin>>(structure,HttpStatus.ACCEPTED);
	}
	
	public ResponseEntity<byte[]> fetchImage(int id){
		Admin studb = adminDao.findAdminById(id);
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
	
}
