import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Role } from '../models/roles.model';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  public roles: Role[] = []

  constructor(private http:HttpClient) { }

  public getRoles(){
    return this.http.get<Role[]>("http://localhost:8080/employees/roles")
  }


}
