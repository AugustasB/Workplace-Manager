package com.workplace.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.workplace.entities.Employee;

@Service
public class SecUserService implements UserDetailsService{

	@Autowired
	EmployeeService es;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Employee employee = es.getByEmail(username);
		return new SecUserDetails(employee);
	}
	
	

}
