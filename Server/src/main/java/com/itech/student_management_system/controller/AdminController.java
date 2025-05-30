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
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.itech.student_management_system.dto.Admin;
import com.itech.student_management_system.dto.Student;
import com.itech.student_management_system.service.AdminService;
import com.itech.student_management_system.util.ResponeStructureAdmin;
import com.itech.student_management_system.util.ResponseStructure;

@RestController
@CrossOrigin
public class AdminController {
	@Autowired
	private AdminService adminService;
	
	@PostMapping("/saveAdmin")
	public  ResponseEntity<ResponeStructureAdmin<Admin>> saveAdmin(@RequestBody Admin admin){
		return adminService.saveAdmin(admin);
	}
	
	@PostMapping("/loginAdmin/{email}/{password}")
	public  ResponseEntity<ResponeStructureAdmin<Admin>> loginAdmin(@PathVariable String email,@PathVariable String password){
		return adminService.loginAdmin(email, password);
	}
	
	@GetMapping("/findAdminById/{aid}")
	public ResponseEntity<ResponeStructureAdmin<Admin>> findAdminById(@PathVariable int aid) {
		return adminService.findAdminById(aid);
	}
	
	@DeleteMapping("/deleteAdminById/{aid}")
	public ResponseEntity<ResponeStructureAdmin<Admin>> deleteAdminById(@PathVariable int aid) {
		return adminService.deleteAdminById(aid);
	}
	
	@PutMapping("/uploadAdminImageById/{aid}")
	public ResponseEntity<ResponeStructureAdmin<Admin>> updateAdminPhotoById(@PathVariable int aid,@RequestBody MultipartFile file) throws IOException {
		return adminService.updateAdminPhotoById(aid,file);
	}
	
	@GetMapping("/getAdminImageById/{aid}")
	public ResponseEntity<byte[]> fetchAdminImage(@PathVariable int aid){
		return adminService.fetchImage(aid);
	}
}
