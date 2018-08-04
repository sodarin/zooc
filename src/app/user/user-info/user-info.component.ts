import { Component, OnInit } from '@angular/core';
import {LoginService, UserResponse} from '../../service/login/login.service';
declare var _MEIQIA: any;
@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  user: UserResponse = null;

  unReadMsg: number = 0;
  hidden: boolean = false;
  hasInit: boolean = false;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.user = this.loginService.resultUser;

    (function(m, ei, q, i, a, j, s) {
      m[i] = m[i] || function() {
        (m[i].a = m[i].a || []).push(arguments)
      };
      j = ei.createElement(q),
        s = ei.getElementsByTagName(q)[0];
      j.async = true;
      j.charset = 'UTF-8';
      j.src = 'https://static.meiqia.com/dist/meiqia.js?_=t';
      s.parentNode.insertBefore(j, s);
    })(window, document, 'script', '_MEIQIA');
    _MEIQIA('entId', 116943);

    _MEIQIA('metadata', {
      name: this.loginService.resultUser.username,
      email: this.loginService.resultUser.email,
      tel: this.loginService.resultUser.mobile
    });
    if (document.getElementById('MEIQIA-BTN-HOLDER')){
      document.getElementById('MEIQIA-BTN-HOLDER').style.display = "block";
    }
  }



}
