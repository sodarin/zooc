import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { BranchService } from '../../../service/branch/branch.service';
import { Branch } from '../../../model/Branch';

@Component({
  selector: 'app-branch-list',
  templateUrl: './branch-list.component.html',
  styleUrls: ['./branch-list.component.css']
})
export class BranchListComponent implements OnInit {

  branches: Branch[];
  constructor(private location: Location, private branchService$: BranchService) { }

  ngOnInit() {
    // TODO The enterprise ID is hard coded
    this.branchService$.getAll(1).subscribe(result => {
      this.branches = result.list;
    });
  }

}
