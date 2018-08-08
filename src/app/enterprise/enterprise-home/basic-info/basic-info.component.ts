import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {Enterprise} from '../../../model/Enterprise';
import {EnterpriseService} from '../../../service/enterprise/enterprise.service';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.css']
})
export class BasicInfoComponent implements OnInit {

  enterprise: Enterprise;
  constructor(private location: Location, private enterpriseService$: EnterpriseService) { }

  ngOnInit() {
    // TODO The enterprise ID is hard coded
    this.enterpriseService$.getById(1).subscribe(result => {
      this.enterprise = result;
      document.getElementById('detail').innerHTML = result.detail;
    });
  }

}
