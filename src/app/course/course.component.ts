import { Component, OnInit } from '@angular/core';
import {LoginService, UserResponse} from '../service/login/login.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  user: UserResponse;

  constructor(private loginService$: LoginService) { }

  ngOnInit() {
    if (document.getElementById('MEIQIA-BTN-HOLDER')){
      document.getElementById('MEIQIA-BTN-HOLDER').style.display = "none";
    }
    if (!this.loginService$.resultUser) {
      this.loginService$.loginByCookies().subscribe( result => {
        this.user = result;
        this.loginService$.resultUser = result;
      });
    } else {
      this.user = this.loginService$.resultUser;
    }
  }

}
