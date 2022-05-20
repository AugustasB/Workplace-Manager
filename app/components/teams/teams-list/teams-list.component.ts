import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employees.model';
import { Team } from 'src/app/models/teams.model';
import { EmployeesService } from 'src/app/services/employees.service';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.css']
})
export class TeamsListComponent implements OnInit {

  public employeesList:Employee[] = [];
  public teamList:Team[] = [];

  constructor(private employeeService:EmployeesService, private teamService:TeamService) { }

  private loadEmployeesList(){
    this.employeeService.getEmployees().subscribe((response)=>{
      this.employeesList=response
    });
  }

  private loadTeamList(){
    this.teamService.getTeams().subscribe((response)=>{
      this.teamList=response
    });
  }

  ngOnInit(): void {
    this.loadEmployeesList();
    this.loadTeamList();
  }

  public delete(id){
    this.teamService.deleteTeam(id).subscribe((result)=>{
      this.loadTeamList();
    })
  }


}
