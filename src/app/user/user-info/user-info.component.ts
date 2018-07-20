import { Component, OnInit } from '@angular/core';
import {LoginService, UserResponse} from '../../service/login/login.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  user: UserResponse = null;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.user = this.loginService.resultUser;
  }

}
