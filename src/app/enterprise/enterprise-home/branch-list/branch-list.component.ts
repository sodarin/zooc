import { Component, OnInit } from '@angular/core';
import {Enterprise} from '../../../model/Enterprise';
import {Location} from '@angular/common';
import {EnterpriseService} from '../../../service/enterprise/enterprise.service';
import {DepartmentService} from '../../../service/department/department.service';
import {Branch} from '../../../model/Department.model';

@Component({
  selector: 'app-branch-list',
  templateUrl: './branch-list.component.html',
  styleUrls: ['./branch-list.component.css']
})
export class BranchListComponent implements OnInit {

  branches: Branch[];
  constructor(private location: Location, private departmentService$: DepartmentService) { }

  ngOnInit() {
    const id = this.location.path().slice(12,13);
    this.branches = this.departmentService$.getDepartmentById(id);
  }

}
