import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(public authservice: AuthService, public router:Router){}
  canActivate():boolean{
    if(this.authservice.isAuthenticated()){
      this.router.navigate(['dashboard']);
      return false;
    }
    return true;
  }
  
}
