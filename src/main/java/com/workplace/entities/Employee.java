package com.workplace.entities;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import org.hibernate.annotations.GenericGenerator;

import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name = "employees")
//@SequenceGenerator(name = "GEN_ID_EMP", sequenceName = "GEN_ID_EMP")
public class Employee implements Serializable{

	@Id
	@GeneratedValue(generator = "inc")
	@GenericGenerator(name = "inc", strategy = "increment")
	private Integer id;
	
	@Column
	@NotBlank
	@Size(min = 2, max = 12)
	private String firstName;
	
	@Column
	@NotBlank
	@Size(min = 2, max = 12)
	private String lastName;
	
	@Column(unique = true)
	@Email
	private String email;
	
	@Column
	@NotBlank
	private String password;
	
	@ManyToOne(targetEntity = Role.class)
	@JoinColumn(name = "role_id")
	private Role role;
	
	@ManyToOne(targetEntity = Team.class)
	@JoinColumn(name = "team_id")
	private Team team;
	
	public Employee() {
		super();
	}

	public Employee(String firstName, String lastName, String email) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
	}

	public Employee(String firstName, String lastName, String email, Role role, Team team) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.role = role;
		this.team = team;
	}
	
	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Role getRole() {
		return role;
	}

	public void setRole(Role role) {
		this.role = role;
	}

	public Team getTeam() {
		return team;
	}

	public void setTeam(Team team) {
		this.team = team;
	}
	
	@Override
	public boolean equals(Object obj) {
		Employee emp = (Employee) obj;
		return (firstName.equals(emp.firstName) && lastName.equals(emp.lastName) && email.equals(emp.email) && role.equals(emp.role) && team.equals(emp.team));
	}

}
