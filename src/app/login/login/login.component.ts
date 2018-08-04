import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../../service/login/login.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  isMobile = false;

  constructor(private fb: FormBuilder, private loginService$: LoginService, private route: Router, private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      mobile: ['', [Validators.required]],
      code: ['', [Validators.required]]
    });
    if (document.getElementById('MEIQIA-BTN-HOLDER')){
      document.getElementById('MEIQIA-BTN-HOLDER').style.display = "none";
    }
  }

  login() {
    this.loginService$.loginByEmail(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe(
        result => {
          console.log(result);
          this.loginService$.resultUser = result;
          this.snackBar.open('登录成功', null, {
            duration: 2000
          });
          this.route.navigateByUrl('/home');
        },
        error => {
          this.snackBar.open(error.error, '请重新登录', {
            duration: 2000
          })
        });
  }

}
