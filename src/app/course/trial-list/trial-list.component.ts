import { Component, OnInit } from '@angular/core';
import { Trial } from '../../model/Trial';
import { TrialService } from '../../service/trial/trial.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatBottomSheet} from '@angular/material';
import {SearchPageComponent} from '../search-page/search-page.component';

@Component({
  selector: 'app-trial-list',
  templateUrl: './trial-list.component.html',
  styleUrls: ['./trial-list.component.scss']
})
export class TrialListComponent implements OnInit {

  trials: Trial[];

  constructor(private trailService$: TrialService,
              private router: Router,
              private routeInfo: ActivatedRoute,
              private bottomSheet: MatBottomSheet) { }

  ngOnInit() {
    // TODO The enterprise ID is hard coded
    this.trailService$.getAll(1).subscribe(result => {
      this.trials = result.list;
    });
  }

  navToTrialDetailPage(item: Trial) {
    this.router.navigate([`${item.trialId}`], { relativeTo: this.routeInfo });
  }

  openBottomSheet() {
    const bottomSheet = this.bottomSheet.open(SearchPageComponent);
    bottomSheet.afterDismissed().subscribe(result => {
      if (result) {
        console.log(result);
        this.trailService$.getAll(1, null, result.name, result.branchId, null, result.category, null)
          .subscribe(next => this.trials = next.list);
      }
    })
  }

}
