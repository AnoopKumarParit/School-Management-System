package com.itech.student_management_system.exception_handler;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.itech.student_management_system.exception.EmailAlreadyPresent;
import com.itech.student_management_system.exception.IdNotFound;
import com.itech.student_management_system.util.ResponseStructure;

@RestControllerAdvice
public class StudentHandler {
	ResponseStructure<String> structure= new ResponseStructure<String>();
	
	@org.springframework.web.bind.annotation.ExceptionHandler(IdNotFound.class)
	public ResponseEntity<ResponseStructure<String>> idNotFound(IdNotFound idNotFound){
		structure.setData(idNotFound.getMessage());
		structure.setMsg("Id not found");
		structure.setStatusCode(HttpStatus.NOT_FOUND.value());
		return new ResponseEntity<ResponseStructure<String>>(structure,HttpStatus.NOT_FOUND);
	}
	
	@org.springframework.web.bind.annotation.ExceptionHandler(EmailAlreadyPresent.class)
	public ResponseEntity<ResponseStructure<String>> idNotFound(EmailAlreadyPresent emailAlreadyPresent){
		structure.setData(emailAlreadyPresent.getMessage());
		structure.setMsg("Id not found");
		structure.setStatusCode(HttpStatus.ALREADY_REPORTED.value());
		return new ResponseEntity<ResponseStructure<String>>(structure,HttpStatus.ALREADY_REPORTED);
	}
}
