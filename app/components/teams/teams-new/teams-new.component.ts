import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employees.model';
import { Team } from 'src/app/models/teams.model';
import { EmployeesService } from 'src/app/services/employees.service';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-teams-new',
  templateUrl: './teams-new.component.html',
  styleUrls: ['./teams-new.component.css']
})
export class TeamsNewComponent implements OnInit {

  public employeesList:Employee[] = [];

  public teamName = null;
  public manager = null;

  constructor(private employeeService:EmployeesService, private teamService:TeamService, private router:Router, ) { }

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe((response)=>{
      this.employeesList=response;
    })
  }

  public onSubmit(form){
   let values = form.form.value;
   this.teamService.addTeam(null, values.teamName, values.manager).subscribe((response)=>{
     this.router.navigate(["/teams/"])
   })
  }

}
