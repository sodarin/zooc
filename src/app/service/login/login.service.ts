import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  resultUser: UserResponse = null;
  constructor(private httpClient: HttpClient) { }

  loginByEmail(email: string, password: string, rememberMe: boolean): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.httpClient.post('/api/v1/user/login/email', {
      email: email,
      password: password,
      rememberMe: rememberMe
    }, httpOptions)
  }

  loginByCookies(): Observable<UserResponse> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.httpClient.post<UserResponse>('/api/v1/user/login/cookie', {
      // loginUserId: this.cookieService.get('loginUserId'),
      // loginPassword: this.cookieService.get('loginPassword')
    }, httpOptions);
  }


  // changePassword(): Observable<any> {
  //   console.log('changePassword');
  //
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json'
  //     })
  //   };
  //   const newUser = new UserRequestBody('zenas2', '123', 'czyczk@ww.com', '3215645621');
  //   return this.httpClient.post('/api/v1/user', JSON.stringify(newUser), httpOptions);
  //
  // }


}

export class UserResponse {
  constructor(
    public userId: string,
    public username: string,
    public email: string,
    public mobile: string,
    public avatarUrl: string,
  ){}
}
