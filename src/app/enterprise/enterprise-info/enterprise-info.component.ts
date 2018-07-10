import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EnterpriseService} from '../../service/enterprise/enterprise.service';
import {Enterprise} from '../../model/Enterprise.model';

@Component({
  selector: 'app-enterprise-info',
  templateUrl: './enterprise-info.component.html',
  styleUrls: ['./enterprise-info.component.css']
})
export class EnterpriseInfoComponent implements OnInit {

  enterprise: Enterprise;
  navLinks;

  constructor(private routeInfo: ActivatedRoute, private enterpriseService$: EnterpriseService) { }

  ngOnInit() {
    const id = this.routeInfo.snapshot.params['id'];
    this.enterprise = this.enterpriseService$.getEnterpriseById(id);
    this.navLinks = [
      {'label': '信息', 'path': `/enterprise/${id}`, 'icon': 'home'},
      {'label': '师资', 'path': `/enterprise/${id}/faculty`, 'icon': 'people'},
      {'label': '分部', 'path': `/enterprise/${id}/department`, 'icon': 'person_pin'},
      {'label': '课程', 'path': `/enterprise/${id}/courses`, 'icon': 'school'},
      {'label': '朋友圈', 'path': `/enterprise/${id}/moment`, 'icon': 'chat'}
    ];
  }

}
