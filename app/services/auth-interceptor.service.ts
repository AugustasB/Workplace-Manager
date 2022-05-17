import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService {

  constructor( private userService:UserService ) { }
 
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (this.userService.user!=null){
      let newReq=req.clone({
        headers:req.headers.append("authorization", "Basic "+btoa(this.userService.user.username +":"+this.userService.user.password))
      });
      return next.handle(newReq);
    }else{
      return next.handle(req);
    }
  }
}
