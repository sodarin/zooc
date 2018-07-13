import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BranchService } from '../../../../service/branch/branch.service';
import { Branch } from '../../../../model/Branch';

@Component({
  selector: 'app-branch-item-info',
  templateUrl: './branch-item-info.component.html',
  styleUrls: ['./branch-item-info.component.css']
})
export class BranchItemInfoComponent implements OnInit {
  item: Branch;

  constructor(private routeInfo: ActivatedRoute, private branchService$: BranchService) { }

  ngOnInit() {
    this.branchService$.getId(this.routeInfo.snapshot.params['id']).subscribe(result => {
      this.item = result;
      console.log(this.item);
    });
  }

}
