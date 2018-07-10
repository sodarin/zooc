import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {Enterprise} from '../../../model/Enterprise.model';
import {EnterpriseService} from '../../../service/enterprise/enterprise.service';

@Component({
  selector: 'app-enterprise-detail',
  templateUrl: './enterprise-detail.component.html',
  styleUrls: ['./enterprise-detail.component.css']
})
export class EnterpriseDetailComponent implements OnInit {

  enterprise: Enterprise;
  constructor(private location: Location, private enterpriseService$: EnterpriseService) { }

  ngOnInit() {
    const id = this.location.path().slice(12,13);
    this.enterprise = this.enterpriseService$.getEnterpriseById(id);
  }

}
