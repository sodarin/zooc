import { Component, OnInit } from '@angular/core';
import { EnterpriseService } from '../../service/enterprise/enterprise.service';
import { Enterprise } from '../../model/Enterprise';

@Component({
  selector: 'app-enterprise-home',
  templateUrl: './enterprise-home-deprecated.component.html',
  styleUrls: ['./enterprise-home-deprecated.component.css']
})
export class EnterpriseHomeDeprecatedComponent implements OnInit {
  constructor(private enterpriseService: EnterpriseService) { }

  enterprises: Enterprise[];

  ngOnInit() {
    // probably deprecated
  }

}
