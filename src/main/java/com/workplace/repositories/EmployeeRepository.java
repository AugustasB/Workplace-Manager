package com.workplace.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.workplace.entities.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Integer>{
	
	Employee findByEmail(String email);

}
