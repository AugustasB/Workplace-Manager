package com.workplace.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.workplace.entities.Employee;
import com.workplace.repositories.EmployeeRepository;

@Service
public class EmployeeService {
	
	@Autowired
	EmployeeRepository er;
	
	public List<Employee> getEmployees(){
		return er.findAll();
	}
	
	public Employee saveEmployee(Employee employee) {
		employee.setPassword((new BCryptPasswordEncoder()).encode(employee.getPassword()));
		return er.save(employee);
	}
	
	public Employee getEmployee(Integer id) {
		return er.findById(id).orElse(null);
	}
	
	public Employee updateEmployee(Employee e) {
		Employee old = this.getEmployee(e.getId());
		old.setFirstName(e.getFirstName());
		old.setLastName(e.getLastName());
		old.setEmail(e.getEmail());
		old.setRole(e.getRole());
		old.setTeam(e.getTeam());
		er.save(old);
		return old;
	}
	
	public void deleteEmployee(Integer id) {
		er.deleteById(id);
	}
	
	public Employee getByEmail(String email) {
		return er.findByEmail(email);
	}

}
