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
}
