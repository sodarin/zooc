import { Component, OnInit } from '@angular/core';
import {EnterpriseService} from '../../service/enterprise/enterprise.service';
import {Enterprise} from '../../model/Enterprise.model';

@Component({
  selector: 'app-enterprise-home',
  templateUrl: './enterprise-home.component.html',
  styleUrls: ['./enterprise-home.component.css']
})
export class EnterpriseHomeComponent implements OnInit {

  enterprises: Enterprise[];

  constructor(private enterpriseService: EnterpriseService) { }

  ngOnInit() {
    this.enterprises = this.enterpriseService.getEnterprises();
  }

}
