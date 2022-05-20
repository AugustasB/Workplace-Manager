import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employees.model';
import { Team } from 'src/app/models/teams.model';
import { EmployeesService } from 'src/app/services/employees.service';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-teams-update',
  templateUrl: './teams-update.component.html',
  styleUrls: ['./teams-update.component.css']
})
export class TeamsUpdateComponent implements OnInit {

  public id;
  public teamName;
  public manager;
  public old = new Team();

  public employeesList:Employee[] = [];

  constructor(private route:ActivatedRoute, private teamService:TeamService, private router:Router, private employeeService:EmployeesService) { }

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe((response)=>{
      this.employeesList = response;
    })
    this.id = this.route.snapshot.params['id'];
    this.teamService.getTeam(this.id).subscribe((team)=>{
      this.old = team;
      this.teamName = team.teamName,
      this.manager = team.manager
    });
  }

  public onSubmit(form){
    this.teamService.updateTeam(this.id, this.teamName, this.manager).subscribe((team)=>{
      this.router.navigate(['/teams/'])
    })
  }

}
