import { Component, OnInit } from '@angular/core';
import {Moment} from '../../../model/Moment.model';
import {MomentService} from '../../../service/moment/moment.service';
import {Location} from '@angular/common';
import {Enterprise} from '../../../model/Enterprise';
import {EnterpriseService} from '../../../service/enterprise/enterprise.service';

@Component({
  selector: 'app-enterprise-moment',
  templateUrl: './enterprise-moment.component.html',
  styleUrls: ['./enterprise-moment.component.css']
})
export class EnterpriseMomentComponent implements OnInit {

  moments: Moment[];
  enterprise: Enterprise;

  constructor(private momentService$: MomentService, private location: Location, private enterpriseService$: EnterpriseService) { }

  ngOnInit() {
    // this.moments = this.momentService$.getMomentByEnterpriseId(id).reverse();
    // this.enterprise = this.enterpriseService$.getEnterpriseById(id);
  }

}
