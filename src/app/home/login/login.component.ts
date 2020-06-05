import { Route, Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public postData={
    'username':'',
    'password':''
  }
  constructor(public authService:AuthService, public router:Router) { }

  ngOnInit() {
  
  }

  loginAction(){
    if(this.postData.username && this.postData.password){
      
     if(this.authService.login(this.postData)){
       this.router.navigate(['dashboard']);
     }  
    }
    else{
        console.log('Error');
    }
    
  }

}
