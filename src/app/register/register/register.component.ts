import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher, MatSnackBar} from '@angular/material';
import {RegisterService} from '../../service/register/register.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  constructor(private fb: FormBuilder, private registerService$: RegisterService, private snackBar: MatSnackBar, private router: Router) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      telephone: ['', [Validators.required]]
    })
  }

  matcher = new MyErrorStateMatcher();

  registerUser() {
    this.registerService$.register(this.registerForm.value.username, this.registerForm.value.password, this.registerForm.value.email, this.registerForm.value.telephone)
      .subscribe(result => {
          this.snackBar.open('注册成功!', null, {
            duration: 2000
          });
          this.router.navigateByUrl('/login')
        },
        error => {
          this.snackBar.open(error.error, '请重新输入', {
            duration: 2000
          })
        })
  }

}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
