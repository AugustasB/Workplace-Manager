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

import com.workplace.entities.Team;
import com.workplace.services.EmployeeService;
import com.workplace.services.TeamService;

@RestController
@RequestMapping("/employees/teams")
public class TeamController {
	
	@Autowired
	TeamService ts;
	@Autowired
	EmployeeService es;
	
	@CrossOrigin
	@GetMapping("/")
	public List<Team> index(){
		return ts.getTeams()
				;
	}
	
	@CrossOrigin
	@PostMapping("/")
	public Team add(@RequestBody Team t) {
		return ts.saveTeam(t);
	}
	
	@CrossOrigin
	@GetMapping("/{id}")
	public Team get(@PathVariable Integer id) {
		Team t = ts.getTeam(id);
		return t;
	}
	
	@CrossOrigin
	@PatchMapping("/{id}")
	public Team update(@PathVariable Integer id, @RequestBody Team t) {
		return ts.updateTeam(t);
	}
	
	@CrossOrigin
	@DeleteMapping("/{id}")
	public Boolean delete(@PathVariable Integer id) {
		ts.deleteTeam(id);
		return true;
	}
	
	

}
