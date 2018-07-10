import { Component, OnInit } from '@angular/core';
import {Enterprise} from '../../../model/Enterprise.model';
import {Location} from '@angular/common';
import {EnterpriseService} from '../../../service/enterprise/enterprise.service';
import {DepartmentService} from '../../../service/department/department.service';
import {Department} from '../../../model/Department.model';

@Component({
  selector: 'app-enterprise-department',
  templateUrl: './enterprise-department.component.html',
  styleUrls: ['./enterprise-department.component.css']
})
export class EnterpriseDepartmentComponent implements OnInit {

  branches: Department[];
  constructor(private location: Location, private departmentService$: DepartmentService) { }

  ngOnInit() {
    const id = this.location.path().slice(12,13);
    this.branches = this.departmentService$.getDepartmentById(id);
  }

}
