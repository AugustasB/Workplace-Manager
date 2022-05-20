package com.workplace.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.workplace.entities.Team;
import com.workplace.repositories.TeamRepository;

@Service
public class TeamService {

	@Autowired
	TeamRepository tr;
	
	public List<Team> getTeams(){
		return tr.findAll();
	}
	
	public Team saveTeam(Team team) {
		return tr.save(team);
	}
	
	public Team getTeam(Integer id) {
		return tr.findById(id).orElse(null);
	}
	
	public Team updateTeam(Team t) {
		Team old = this.getTeam(t.getId());
		old.setTeamName(t.getTeamName());
		old.setManager(t.getManager());
		tr.save(old);
		return old;
	}
	
	public void deleteTeam(Integer id) {
		tr.deleteById(id);
	}
}
