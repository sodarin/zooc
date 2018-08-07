import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {LoginService, UserResponse} from '../../service/login/login.service';
import {CheckinService} from '../../service/checkin/checkin.service';
import {MatSnackBar} from '@angular/material';
declare var _MEIQIA: any;
@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  user: UserResponse = null;
  hasCheckedIn: boolean;
  unreadMsg = 0;
  hidden = false;
  hasInit = false;

  constructor(private loginService$: LoginService,
              private checkinService$: CheckinService,
              private snackBar: MatSnackBar,
              private changeDetector: ChangeDetectorRef) { }

  async ngOnInit() {
    // Log in using cookies if it's not logged in
    if (!this.loginService$.resultUser) {
      this.loginService$.resultUser = await this.loginService$.loginByCookies().toPromise();
    }
    this.user = this.loginService$.resultUser;
    // Check if the user has checked in
    // TODO: Enterprise ID is hard-coded
    this.checkinService$.checkCheckedInOrNot(+this.user.userId, 1, new Date()).subscribe(it => {
      this.hasCheckedIn = it;
      this.changeDetector.markForCheck();
    });

    console.log(this.user);
    (function(m, ei, q, i, a, j, s) {
      m[i] = m[i] || function() {
        (m[i].a = m[i].a || []).push(arguments);
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
      name: this.loginService$.resultUser.username,
      email: this.loginService$.resultUser.email,
      tel: this.loginService$.resultUser.mobile
    });
    if (document.getElementById('MEIQIA-BTN-HOLDER')) {
      document.getElementById('MEIQIA-BTN-HOLDER').style.display = "block";
    }
  }

  async checkIn() {
    // TODO: Enterprise ID is hard-coded
    await this.checkinService$.checkIn(+this.user.userId, 1).toPromise();
    this.snackBar.open('签到成功。', null, { duration: 2000 });
    this.hasCheckedIn = true;
  }
}
