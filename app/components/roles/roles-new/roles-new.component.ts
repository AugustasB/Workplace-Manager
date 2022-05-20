import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RolesService } from 'src/app/services/roles.service';

@Component({
  selector: 'app-roles-new',
  templateUrl: './roles-new.component.html',
  styleUrls: ['./roles-new.component.css']
})
export class RolesNewComponent implements OnInit {

  public roleName = null;

  constructor(private roleService:RolesService, private router:Router) { }

  ngOnInit(): void {
  }

  public onSubmit(form){
    let values = form.form.value;
    this.roleService.addRole(null, values.roleName).subscribe((response)=>{
      this.router.navigate(["/roles/"])
    })
  }

}
