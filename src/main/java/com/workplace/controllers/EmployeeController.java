package com.workplace.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.workplace.entities.Employee;
import com.workplace.entities.Role;
import com.workplace.entities.Team;
import com.workplace.services.EmployeeService;
import com.workplace.services.RoleService;
import com.workplace.services.TeamService;

@RestController
@RequestMapping("/employees")
public class EmployeeController {
	
	@Autowired
	EmployeeService es;
	@Autowired
	RoleService rs;
	@Autowired
	TeamService ts;
	
	@CrossOrigin
	@GetMapping("/")
	public List<Employee> index() {
		return es.getEmployees();
	}
	
	@CrossOrigin
	@GetMapping("/roles")
	public List<Role> roles(){
		return rs.getRoles();
	}
	
	@CrossOrigin
	@GetMapping("/teams")
	public List<Team> teams(){
		return ts.getTeams();
	}
	
	@CrossOrigin
	@PostMapping("/")
	public Employee add(@RequestBody Employee e) {
		System.out.println(e);
		return es.saveEmployee(e);
	}
	
	@CrossOrigin
	@GetMapping("/{id}")
	public Employee get(@PathVariable Integer id) {
		Employee e = es.getEmployee(id);
		return e;
	}
	
	@CrossOrigin
	@PatchMapping("/{id}")
	public Employee update(@PathVariable Integer id, @RequestBody Employee e) {
		return es.updateEmployee(e);
	}
	
	@CrossOrigin
	@DeleteMapping("/{id}")
	public Boolean delete(@PathVariable Integer id) {
		es.deleteEmployee(id);
		return true;
	}
	
	@CrossOrigin
	@GetMapping("/email/{email}")
	public Boolean newEmail(@PathVariable String email) {
		return (es.getByEmail(email)==null);
	}
	
	@CrossOrigin
	@GetMapping("/{id}/email/{email}")
	public Boolean updateEmail(@PathVariable Integer id, @PathVariable String email) {
		Employee e = es.getByEmail(email);
		if(e!=null) {
			if(e.getId()==id) {
				return true;
			} else {
				return false;
			}
		} else {
			return true;
		}
	}
	
	

}
