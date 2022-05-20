import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employees.model';
import { Role } from 'src/app/models/roles.model';
import { EmployeesService } from 'src/app/services/employees.service';
import { RolesService } from 'src/app/services/roles.service';

@Component({
  selector: 'app-roles-list',
  templateUrl: './roles-list.component.html',
  styleUrls: ['./roles-list.component.css']
})
export class RolesListComponent implements OnInit {

  public rolesList:Role[] = [];
  public employeesList:Employee[] = [];

  constructor(private employeeService:EmployeesService, private roleService:RolesService) { }

  private loadEmployeeList(){
    this.employeeService.getEmployees().subscribe((response)=>{
      this.employeesList=response});
  }

  private loadRoleList(){
    this.roleService.getRoles().subscribe((response)=>{
      this.rolesList=response
    });
  }

  ngOnInit(): void {
    this.loadEmployeeList();
    this.loadRoleList();
  }

  public delete(id){
    this.roleService.deleteRole(id).subscribe((result)=>{
      this.loadRoleList
    })
  }

}
