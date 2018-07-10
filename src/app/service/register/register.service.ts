import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private _http: HttpClient) { }

  register(username: string, password: string, email: string, mobile: string): Observable<any> {
    const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json'
          })
        };
    const newUser = new UserRequestBody(username, password, email, mobile);
    return this._http.post('/api/v1/user', JSON.stringify(newUser), httpOptions);
  }
}

class UserRequestBody {
  constructor(
    public username: string,
    public password: string,
    public email: string,
    public mobile: string
  ){}
}
