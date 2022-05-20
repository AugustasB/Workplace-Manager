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
    return this.http.get<Role[]>("http://localhost:8080/employees/roles/")
  }

  public addRole(id, roleName){
    return this.http.post("http://localhost:8080/employees/roles/", {
      roleName:roleName
    });
  }

  public getRole(id){
    return this.http.get<Role>("http://localhost:8080/employees/roles/"+id)
  }

  public updateRole(id, roleName){
    return this.http.patch("http://localhost:8080/employees/roles/"+id, {
      id:id,
      roleName:roleName
    })
  }

  public deleteRole(id){
    return this.http.delete("http://localhost:8080/employees/roles/"+id)
  }
}
