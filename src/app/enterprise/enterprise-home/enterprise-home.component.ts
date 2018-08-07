import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EnterpriseService} from '../../service/enterprise/enterprise.service';
import {Enterprise} from '../../model/Enterprise';
import {LoginService, UserResponse} from '../../service/login/login.service';

@Component({
  selector: 'app-enterprise-home',
  templateUrl: './enterprise-home.component.html',
  styleUrls: ['./enterprise-home.component.css']
})
export class EnterpriseHomeComponent implements OnInit {

  user: UserResponse;

  enterprise: Enterprise;
  navLinks;

  constructor(private routeInfo: ActivatedRoute,
              private enterpriseService$: EnterpriseService,
              private loginService$: LoginService) { }

  ngOnInit() {
    // TODO The enterprise ID is hard coded
    // const id = this.routeInfo.snapshot.params['id'];
    const id = 1;
    this.enterpriseService$.getById(id).subscribe(result => {
      this.enterprise = result;
    });
    this.navLinks = [
      {'label': '信息', 'path': `/enterprise/info`, 'icon': 'home'},
      {'label': '师资', 'path': `/enterprise/lecturers`, 'icon': 'people'},
      {'label': '分部', 'path': `/enterprise/branches`, 'icon': 'location_city'},
      {'label': '朋友圈', 'path': `/enterprise/moments`, 'icon': 'camera'}
    ];
    if (document.getElementById('MEIQIA-BTN-HOLDER')){
      document.getElementById('MEIQIA-BTN-HOLDER').style.display = "none";
    }
    if (!this.loginService$.resultUser) {
      this.loginService$.loginByCookies().subscribe( result => {
        this.user = result;
        this.loginService$.resultUser = result;
      })
    } else {
      this.user = this.loginService$.resultUser;
    }
  }

}
