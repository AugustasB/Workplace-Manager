package com.workplace.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.workplace.entities.Role;

public interface RoleRepository extends JpaRepository<Role, Integer>{

}
