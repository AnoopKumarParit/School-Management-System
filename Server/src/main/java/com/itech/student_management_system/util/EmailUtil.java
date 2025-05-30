package com.itech.student_management_system.util;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Component;
@Component
public class EmailUtil {
	@Autowired
	private JavaMailSender mailSender;
	
	public void sendConfirmationEmail(String to) {
		SimpleMailMessage message = new SimpleMailMessage();
		message.setTo(to);
		message.setFrom("anuragh@gmail.com");
		message.setText("This is my email");
		message.setSubject("Login Successsful");
		mailSender.send(message);
	}
	
	public void sendDeletionConfirmationEmail(String to) {
		SimpleMailMessage message = new SimpleMailMessage();
		message.setTo(to);
		message.setFrom("anuragh@gmail.com");
		message.setText("Thank you for cooperating with us");
		message.setSubject("Log out Successsful");
		mailSender.send(message);
	}
	
	public void sendUpdationConfirmationEmail(String to) {
		SimpleMailMessage message = new SimpleMailMessage();
		message.setTo(to);
		message.setFrom("anuragh@gmail.com");
		message.setText("Thank you for cooperating with us");
		message.setSubject("Account update is successful");
		mailSender.send(message);
	}
}
