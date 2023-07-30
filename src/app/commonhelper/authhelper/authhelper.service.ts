import { Injectable } from '@angular/core';
import { HttpcallsService } from 'src/app/generichttprequests/httpcalls/httpcalls.service';
import { HTTPPATH } from 'src/http.paths/http.paths';

@Injectable({
  providedIn: 'root',
})
export class AuthhelperService {
  constructor(private httpcall: HttpcallsService) {}

  registeruser(body: any) {
    let route = HTTPPATH.signup;
    return this.httpcall.postRequest(route, body);
  }

  loginuser(body: any) {
    let route = HTTPPATH.login;
    return this.httpcall.postRequest(route, body);
  }

  forgotPassword(body: any) {
    let route = HTTPPATH.forgot;
    return this.httpcall.postRequest(route, body);
  }

  reset(body: any) {
    let route = HTTPPATH.reset;
    return this.httpcall.postRequest(route, body);
  }
}
