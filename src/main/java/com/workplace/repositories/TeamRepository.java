package com.workplace.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.workplace.entities.Team;

public interface TeamRepository extends JpaRepository<Team, Integer>{

}
