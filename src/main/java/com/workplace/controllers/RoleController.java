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

import com.workplace.entities.Role;
import com.workplace.services.RoleService;

@RestController
@RequestMapping("/employees/roles")
public class RoleController {
	
	@Autowired
	RoleService rs;
	
	@CrossOrigin
	@GetMapping("/")
	public List<Role> index(){
		return rs.getRoles();
	}
	
	@CrossOrigin
	@PostMapping("/")
	public Role add(@RequestBody Role r) {
		return rs.saveRole(r);
	}
	
	@CrossOrigin
	@GetMapping("/{id}")
	public Role get(@PathVariable Integer id) {
		Role r = rs.getRole(id);
		return r;
	}
	
	@CrossOrigin
	@PatchMapping("/{id}")
	public Role update(@PathVariable Integer id, @RequestBody Role r) {
		return rs.updateRole(r);
	}
	
	@CrossOrigin
	@DeleteMapping("/{id}")
	public Boolean delete(@PathVariable Integer id) {
		rs.deleteRole(id);
		return true;
	}
	
	

}
