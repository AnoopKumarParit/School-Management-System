package com.itech.student_management_system.util;

import java.time.LocalDateTime;

import org.springframework.stereotype.Component;

import lombok.Data;
@Component
@Data
public class ResponeStructureAdmin<T> {
	private String msg;
	private int statusCode;
	private T data;
	private LocalDateTime dateTime=LocalDateTime.now();
	
}
