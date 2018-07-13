import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BranchService } from '../../../../service/branch/branch.service';

@Component({
  selector: 'app-branch-item-info',
  templateUrl: './branch-item-info.component.html',
  styleUrls: ['./branch-item-info.component.css']
})
export class BranchItemInfoComponent implements OnInit {
  id: number;

  constructor(private routeInfo: ActivatedRoute, private branchService$: BranchService) { }

  ngOnInit() {
    this.id = this.routeInfo.params['id'];
  }

}
