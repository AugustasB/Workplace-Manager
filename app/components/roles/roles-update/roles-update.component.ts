import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Role } from 'src/app/models/roles.model';
import { RolesService } from 'src/app/services/roles.service';

@Component({
  selector: 'app-roles-update',
  templateUrl: './roles-update.component.html',
  styleUrls: ['./roles-update.component.css']
})
export class RolesUpdateComponent implements OnInit {

  public id;
  public roleName;
  public old = new Role();

  constructor(private route:ActivatedRoute, private router:Router, private roleService:RolesService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.roleService.getRole(this.id).subscribe((role)=>{
      this.old = role;
      this.roleName = role.roleName
    });
  }

  public onSubmit(form){
    this.roleService.updateRole(this.id, this.roleName).subscribe((role)=>{
      this.router.navigate(["/roles"])
    })
  }

}
