import { Component, OnInit } from '@angular/core';
import { Trial } from '../../model/Trial';
import { ActivatedRoute } from '@angular/router';
import { TrialService } from '../../service/trial/trial.service';
import { BranchService } from '../../service/branch/branch.service';
import { Branch } from '../../model/Branch';

@Component({
  selector: 'app-trial-item-info',
  templateUrl: './trial-item-info.component.html',
  styleUrls: ['./trial-item-info.component.css']
})
export class TrialItemInfoComponent implements OnInit {
  item: Trial;
  branch: Branch;

  constructor(private routeInfo: ActivatedRoute, private trialService$: TrialService, private branchService$: BranchService) { }

  ngOnInit() {
    this.trialService$.getDetailById(this.routeInfo.snapshot.params['id']).subscribe(result => {
      this.item = result;
    });
  }

  getBranchDetailIfNotDone() {
    if (this.branch) {
      return;
    }
    this.branchService$.getId(this.item.branchId).subscribe(branch => {
      this.branch = branch;
      console.log(`Longitude: ${this.branch.longitude}`);
      console.log(`Latitude: ${this.branch.latitude}`);
    });
  }
}
