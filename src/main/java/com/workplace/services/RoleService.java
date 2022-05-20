package com.workplace.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.workplace.entities.Role;
import com.workplace.repositories.RoleRepository;

@Service
public class RoleService {

	@Autowired
	RoleRepository rr;
	
	public List<Role> getRoles(){
		return rr.findAll();
	}
	
	public Role saveRole(Role role) {
		return rr.save(role);
	}
	
	public Role getRole(Integer id) {
		return rr.findById(id).orElse(null);
	}
	
	public Role updateRole(Role r) {
		Role old = this.getRole(r.getId());
		old.setRoleName(r.getRoleName());
		rr.save(old);
		return old;
	}
	
	public void deleteRole(Integer id) {
		rr.deleteById(id);
	}
	
}
