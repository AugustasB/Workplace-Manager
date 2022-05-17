import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'workplace';

  constructor(private userService:UserService, private router:Router) {

  }

  ngOnInit(): void{
    this.userService.autoLogin();
    if(!this.userService.isLoggedIn()){
      this.router.navigate(["/login"])
    }
  }
}
