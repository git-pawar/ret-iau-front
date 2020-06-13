import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormControl } from '@angular/forms';
import { CommonServiceService } from './../../services/common-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [CommonServiceService]
})
export class RegisterComponent implements OnInit {

  org : any = {};

  constructor(private commonserv : CommonServiceService,private router : Router) {
  
   }

  ngOnInit() {
    
  }
  emailCtrl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  fnameCtrl = new FormControl('', [
    Validators.required
  ]);
  lnameCtrl = new FormControl('', [
    Validators.required
  ]);

  orgTypeCtrl = new FormControl('', [
    Validators.required
  ]);
  orgNameCtrl = new FormControl('', [
    Validators.required
  ]);

  phoneCtrl = new FormControl('', [
    Validators.required,Validators.min(6000000000), Validators.max(9999999999)
  ]);

  pwdCtrl = new FormControl('', [
    Validators.required,Validators.min(100000), Validators.max(999999)
  ]); 
  cpwdCtrl = new FormControl('', [
    Validators.required
  ])  ; 

  register(){
    var _self = this;
    if(_self.fnameCtrl.value && _self.lnameCtrl.value && 
      _self.orgTypeCtrl.value && _self.orgNameCtrl &&
      _self.phoneCtrl.value && !_self.phoneCtrl.hasError('min') && _self.emailCtrl.value
       && !_self.emailCtrl.hasError('email') &&
       _self.pwdCtrl.value && !_self.pwdCtrl.hasError('min') && _self.cpwdCtrl.value && (_self.pwdCtrl.value == _self.cpwdCtrl.value) ){
      
      _self.org.OrganisationType = _self.orgTypeCtrl.value;
      _self.org.OrganisationName = _self.orgNameCtrl.value;
      _self.org.FirstName = _self.fnameCtrl.value;
      _self.org.LastName = _self.lnameCtrl.value;
      _self.org.Email = _self.emailCtrl.value;
      _self.org.PhoneNumber = _self.phoneCtrl.value;
      
      _self.commonserv.registerOrg(_self.org).subscribe(res => {
      if(res.success){
        _self.router.navigate(['/otp',{phone : res.result.PhoneNumber}]);
        return;
      }
    });
  }

  if(!_self.fnameCtrl.value){
     alert('First Name Required.');
     return;
  }
  if(!_self.lnameCtrl.value){
    alert('Last Name Required.');
    return;
 }
 if(!_self.orgTypeCtrl.value){
  alert('Orgnisation Type Required.');
  return;
}
if(!_self.orgNameCtrl.value){
  alert('Orgnisation Name Required.');
  return;
}

if(!_self.phoneCtrl.value){
  alert('Phone Number Required.');
  return;
}
if(_self.phoneCtrl.hasError('min')){
  alert('Enter Valid phone.');
  return;
}

if(!_self.emailCtrl.value){
  alert('Email Required.');
  return;
}
if(_self.emailCtrl.hasError('email')){
  alert('enter valid email.');
  return;
}
if(!_self.pwdCtrl.value){
  alert('Password Required.');
  return;
}

if(_self.pwdCtrl.hasError('min')){
  alert('Password must be 6 character long.');
  return;
}

if(!_self.cpwdCtrl.value){
  alert('Confirm Password Required.');
  return;
}

  if(_self.pwdCtrl.value != _self.cpwdCtrl.value){
    alert('Password and Corfirm Must be same ');
    return;
  }
  }
}
