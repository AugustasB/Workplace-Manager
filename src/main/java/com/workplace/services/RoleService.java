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
}
