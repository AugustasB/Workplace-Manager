import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employees.model';
import { Role } from 'src/app/models/roles.model';
import { Team } from 'src/app/models/teams.model';
import { EmployeesService } from 'src/app/services/employees.service';
import { RolesService } from 'src/app/services/roles.service';
import { TeamService } from 'src/app/services/team.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  public employeesList:Employee[] = [];
  public rolesList:Role[] = [];
  public teamList:Team[] = [];

  constructor(private employeeService:EmployeesService, private roleService:RolesService, private user:UserService, private router:Router, private teamService:TeamService) {
    if(!user.isLoggedIn()){
      this.router.navigate(["/login"])
    }
   }

  private loadEmployeeList(){
    this.employeeService.getEmployees().subscribe((response)=>{
      this.employeesList=response},(response)=>{
        if(response.status==401){
          this.user.logOut();
        }
      });
  }

  private loadRoleList(){
    this.roleService.getRoles().subscribe((response)=>{
      this.rolesList=response
    });
  }

  private loadTeamList(){
    this.teamService.getTeams().subscribe((response)=>{
      this.teamList=response;
    })
  }

  ngOnInit(): void {
      this.loadEmployeeList();
      this.loadRoleList();
      this.loadTeamList();
    };

  

  public delete(id){
    this.employeeService.deleteEmployee(id).subscribe((result)=>{
      this.loadEmployeeList();
    })
  }

}
