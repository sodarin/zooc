import { Component, OnInit } from '@angular/core';
import {User} from '../model/User.model';
import {LoginService, UserResponse} from '../service/login/login.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: UserResponse = null;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.user = this.loginService.resultUser;
  }

}
