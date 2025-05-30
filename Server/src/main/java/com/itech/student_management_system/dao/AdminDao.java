package com.itech.student_management_system.dao;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.itech.student_management_system.dto.Admin;
import com.itech.student_management_system.repository.AdminRepository;

@Repository
public class AdminDao {
	@Autowired
	private AdminRepository adminRepository;
	
	public Admin saveAdmin(Admin admin) {
		return adminRepository.save(admin);
	}
	
	public Admin loginAdmin(String email,String password) {
		return adminRepository.loginAdmin(email, password);
	}
	
	public Admin findAdminById(int id) {
		Optional<Admin> admindb = adminRepository.findById(id);
		if(admindb.isPresent())
			return admindb.get();
		else
			return null;
	}
	
	public Admin deleteAdminById(int id) {
		Optional<Admin> admindb = adminRepository.findById(id);
		if(admindb.isPresent()) {
			adminRepository.delete(admindb.get());
			return admindb.get();
		}
		else
			return null;
			
	}
	
	public Admin updateAdminPhotoById(Admin admin) {
		Optional<Admin> admindb = adminRepository.findById(admin.getAid());
		if(admindb.isPresent()) {
			adminRepository.save(admindb.get());
			return admindb.get();
		}
		else
			return null;
			
	}
}
