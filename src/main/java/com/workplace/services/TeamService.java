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
}
