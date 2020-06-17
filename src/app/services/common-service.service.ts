import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { HttpErrorHandler, HandleError } from './../http-error-handler.service';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};



@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {
  private handleError: HandleError;
  baseurl = 'http://18.223.119.48/iappointu';
  constructor(private http: HttpClient,httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('CommonServiceService');
   }

  registerOrg(org) : Observable<any>
  {
    
    let requestObject={'OrganisationType': org.OrganisationType,'OrganisationName':org.OrganisationName,
    'FirstName':org.FirstName,'LastName':org.LastName,'Email':org.Email,'PhoneNumber':org.PhoneNumber};
    return this.http.post<any>(this.baseurl+'/api/partner/registration',
    requestObject,{headers:httpOptions.headers})
    .pipe(catchError(this.handleError('registerOrg',[])));
  }

  verifyotp(obj) : Observable<any>
  {
    let requestObject={'OTP':obj.otp,'PhoneNumber':obj.phone};
    return this.http.post<any>(this.baseurl+'/api/partner/registration',
    requestObject,{headers:httpOptions.headers})
    .pipe(catchError(this.handleError('verifyotp',[])));
  }
}
