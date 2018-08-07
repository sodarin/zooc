import { Component, OnInit } from '@angular/core';
import {LoginService, UserResponse} from '../../service/login/login.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  user: UserResponse;

  constructor(private loginService$: LoginService) { }

  ngOnInit() {
    this.user = this.loginService$.resultUser;
  }

}
