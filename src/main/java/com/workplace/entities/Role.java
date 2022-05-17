package com.workplace.entities;

import java.io.Serializable;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;

@Entity
@Table (name = "roles")
//@SequenceGenerator(name = "GEN_ID_ROL", sequenceName = "GEN_ID_ROL")
@JsonDeserialize
public class Role implements Serializable{

	@Id
	@GeneratedValue(generator = "inc")
	@GenericGenerator(name = "inc", strategy = "increment")
	private Integer id;
	
	@Column
	private String roleName;
	
	@OneToMany(mappedBy = "role", fetch = FetchType.EAGER, targetEntity = Employee.class)
	@JsonIgnore
	private Set<Employee> employees;
	
	public Role() {
		super();
	}

	

	public Role(String roleName) {
		super();
		this.roleName = roleName;
	}



	public Role(Integer id) {
		super();
		this.id = id;
	}



	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getRoleName() {
		return roleName;
	}

	public void setRoleName(String roleName) {
		this.roleName = roleName;
	}

	public Set<Employee> getEmployees() {
		return employees;
	}

	public void setEmployees(Set<Employee> employees) {
		this.employees = employees;
	}

	@Override
	public String toString() {
		return "Role [id=" + id + ", roleName=" + roleName + ", employees=" + employees + "]";
	}
	
	
	

}
