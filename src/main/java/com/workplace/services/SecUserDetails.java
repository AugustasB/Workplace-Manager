package com.workplace.services;

import java.util.Collection;
import java.util.HashSet;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.workplace.entities.Employee;

public class SecUserDetails implements UserDetails{

	private Employee employee;

	public SecUserDetails(Employee employee) {
		super();
		this.employee = employee;
	}

	public SecUserDetails() {
		super();
	}
	
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		HashSet<GrantedAuthority> ga = new HashSet<>();
		ga.add(new SimpleGrantedAuthority(this.employee.getRole().getRoleName()));
		return ga;
	}

	@Override
	public String getPassword() {
		return this.employee.getPassword();
	}

	@Override
	public String getUsername() {
		return this.employee.getEmail();
	}

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return true;
	}
}
