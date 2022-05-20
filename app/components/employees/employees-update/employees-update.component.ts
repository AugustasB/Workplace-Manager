import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employees.model';
import { Role } from 'src/app/models/roles.model';
import { Team } from 'src/app/models/teams.model';
import { EmployeesService } from 'src/app/services/employees.service';
import { RolesService } from 'src/app/services/roles.service';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-employees-update',
  templateUrl: './employees-update.component.html',
  styleUrls: ['./employees-update.component.css']
})
export class EmployeesUpdateComponent implements OnInit {

  public id;
  public firstName;
  public lastName;
  public email;
  public role;
  public team;
  public old = new Employee();

  public teamList:Team[] = [];
  public roleList:Role[] = [];

  constructor(private route:ActivatedRoute, private employeeService:EmployeesService, private router:Router, private roleService:RolesService, private teamService:TeamService) { }

  ngOnInit(): void {
    this.teamService.getTeams().subscribe((response)=>{
      this.teamList=response;
    this.roleService.getRoles().subscribe((response)=>{
      this.roleList=response});
    })
    this.id = this.route.snapshot.params['id'];
    this.employeeService.getEmployee(this.id).subscribe((employee)=>{
      this.old = employee;
      this.firstName = employee.firstName,
      this.lastName = employee.lastName,
      this.email = employee.email,
      this.role = employee.role,
      this.team = employee.team
    });
  }

  public onSubmit(form){
    this.employeeService.updateEmployee(this.id, this.firstName, this.lastName, this.email, this.role, this.team).subscribe((employee)=>{
      this.router.navigate(["/"]);
      
    });
  }

}
