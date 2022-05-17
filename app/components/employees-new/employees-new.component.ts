import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employees.model';
import { Role } from 'src/app/models/roles.model';
import { Team } from 'src/app/models/teams.model';
import { EmployeesService } from 'src/app/services/employees.service';
import { RolesService } from 'src/app/services/roles.service';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-employees-new',
  templateUrl: './employees-new.component.html',
  styleUrls: ['./employees-new.component.css']
})
export class EmployeesNewComponent implements OnInit {

  public roleList:Role[] = [];
  public teamList:Team[] = [];

  public role;
  public team;

  public firstName = null;
  public lastName = null;
  public email = null;
  public password = null;
  public isEmailValid = true;

  constructor(private employeeService:EmployeesService, private router:Router, private roleService:RolesService, private teamService:TeamService) { }

  ngOnInit(): void {
    this.teamService.getTeams().subscribe((response)=>{
      this.teamList=response;
    this.roleService.getRoles().subscribe((response)=>{
      this.roleList=response});
    })
  }

  public onSubmit(form){
    let values = form.form.value;
    this.employeeService.isEmailAvailable(this.email).subscribe((response)=>{
      if(response == true){
        this.employeeService.addEmployee(null, values.firstName, values.lastName, values.email, values.role, values.team, values.password).subscribe((response)=>
        {this.router.navigate(["/"])});
      } else {
        this.isEmailValid = false;
      }
    })
  }

  public onEmailUpdate(){
    this.employeeService.isEmailAvailable(this.email).subscribe((response)=>{
      this.isEmailValid=response;
    })
  }

}
