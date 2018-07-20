import { Component, OnInit } from '@angular/core';
import {LoginService, UserResponse} from '../../service/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: UserResponse = null;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    console.log(this.loginService);
    this.user = this.loginService.resultUser;
    console.log(this.user);
  }

  // changePassword(){
  //   console.log('aasdfasdf');
  //   this.loginService.changePassword()
  //     .subscribe(data => console.log(data));
  // }


}
