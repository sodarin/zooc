import {Component, Input, OnInit} from '@angular/core';
import {Branch} from '../../../../model/Branch';
import {Router} from '@angular/router';

@Component({
  selector: 'app-branch-item',
  templateUrl: './branch-item.component.html',
  styleUrls: ['./branch-item.component.css']
})
export class BranchItemComponent implements OnInit {

  @Input() item;
  constructor(private route: Router) { }

  ngOnInit() {
  }

  navToInfoPage(item: Branch) {
    this.route.navigateByUrl(`/enterprise/branches/${item.branchId}`);
  }

}
