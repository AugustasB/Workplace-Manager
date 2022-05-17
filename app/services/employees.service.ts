import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { Employee } from '../models/employees.model';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  public employess: Employee[] = []

  public checkLogin=(response)=>{
    if (response.status == 401){
      this.user.logOut();
    }
    return throwError(()=> new Error("not logged in"))
  }

  constructor(private http:HttpClient, private user:UserService) { }

  public getEmployees(){
    return this.http.get<Employee[]>("http://localhost:8080/employees/").pipe(catchError(this.checkLogin));
  }

  public addEmployee(id, firstName, lastName, email, role, team, password){
    return this.http.post("http://localhost:8080/employees/", {
      firstName:firstName,
      lastName:lastName,
      email:email,
      role:role,
      team:team,
      password:password
    }).pipe(catchError(this.checkLogin));
  }

  public getEmployee(id){
    return this.http.get<Employee>("http://localhost:8080/employees/"+id).pipe(catchError(this.checkLogin));
  }

  public updateEmployee(id, firstName, lastName, email, role, team){
    return this.http.patch("http://localhost:8080/employees/"+id, {
      id:id,
      firstName:firstName,
      lastName:lastName,
      email:email,
      role:role,
      team:team
    }).pipe(catchError(this.checkLogin));
  }

  public deleteEmployee(id){
    return this.http.delete("http://localhost:8080/employees/"+id).pipe(catchError(this.checkLogin));
  }

  public isEmailAvailable(email, id?){
    if(id==null){
      return this.http.get<boolean>("http://localhost:8080/employees/email/"+email).pipe(catchError(this.checkLogin));
    } else {
      return this.http.get<boolean>("http://localhost:8080/employees/"+id+"/email/"+email).pipe(catchError(this.checkLogin));
    }
  }
  
}
