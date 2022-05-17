package com.workplace.entities;

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

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;

@Entity
@Table (name = "teams")
//@SequenceGenerator(name = "GEN_ID_TEA", sequenceName = "GEN_ID_TEA")
@JsonDeserialize
public class Team {

	@Id
	@GeneratedValue(generator = "inc")
	@GenericGenerator(name = "inc", strategy = "increment")
	private Integer id;
	
	@Column
	private String manager;
	
	@Column
	private String teamName;
	
	@OneToMany(mappedBy = "team", fetch = FetchType.EAGER, targetEntity = Employee.class)
	@JsonIgnore
	private Set<Employee> employees;
	
	public Team() {
		super();
	}

	public Team(Integer id) {
		super();
		this.id = id;
	}

	public Team(String teamName) {
		super();
		this.teamName = teamName;
	}

	public Team(String manager, Set<Employee> employees) {
		super();
		this.manager = manager;
		this.employees = employees;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getManager() {
		return manager;
	}

	public void setManager(String manager) {
		this.manager = manager;
	}

	public Set<Employee> getEmployees() {
		return employees;
	}

	public void setEmployees(Set<Employee> employees) {
		this.employees = employees;
	}
	
	public String getTeamName() {
		return teamName;
	}

	public void setTeamName(String teamName) {
		this.teamName = teamName;
	}
	
	@Override
	public String toString() {
		return "Team [id=" + id + ", manager=" + manager + ", teamName=" + teamName + ", employees=" + employees + "]";
	}

}
