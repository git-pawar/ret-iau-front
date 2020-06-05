import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  public isAuthenticated():boolean{
    const userData=sessionStorage.getItem('useSession');
    if(userData && userData.length>0){
      return true;
    }
    else{
      return false;
    }
  }
  public async getUserData(){
    const userData= await sessionStorage.getItem('useSession');
    return JSON.parse(userData);
  }
  public async login(postData){
    const ResponseData={
      'name':'Ashish',
      'id':'123'
    }
    await sessionStorage.setItem('useSession',JSON.stringify(ResponseData));
    return true;
  }
  public signup(postData){

  }
  public async logout(){
    await sessionStorage.removeItem('useSession');
    await sessionStorage.clear();
    return true;
  }

}
