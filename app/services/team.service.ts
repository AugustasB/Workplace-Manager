import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Team } from '../models/teams.model';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  public teams: Team[] = []

  constructor(private http:HttpClient) { }

  public getTeams(){
    return this.http.get<Team[]>("http://localhost:8080/employees/teams")
  }

  public addTeam(id, teamName, manager){
    return this.http.post("http://localhost:8080/employees/teams/", {
      teamName:teamName,
      manager:manager
    });
  }

  public getTeam(id){
    return this.http.get<Team>("http://localhost:8080/employees/teams/"+id)
  }

  public updateTeam(id, teamName, manager){
    return this.http.patch("http://localhost:8080/employees/teams/"+id,{
      id:id,
      teamName:teamName,
      manager:manager
    });
  }

  public deleteTeam(id){
    return this.http.delete("http://localhost:8080/employees/teams/"+id);
  }
}
