import { Component, OnInit } from '@angular/core';
import { Trial } from '../../model/Trial';
import { TrialService } from '../../service/trial/trial.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-trial-list',
  templateUrl: './trial-list.component.html',
  styleUrls: ['./trial-list.component.css']
})
export class TrialListComponent implements OnInit {

  trials: Trial[];

  constructor(private trailService$: TrialService, private router: Router, private routeInfo: ActivatedRoute) { }

  ngOnInit() {
    // TODO The enterprise ID is hard coded
    this.trailService$.getAll(1).subscribe(result => {
      this.trials = result.list;
    });
  }

  navToTrialDetailPage(item: Trial) {
    this.router.navigate([`${item.trialId}`], { relativeTo: this.routeInfo });
  }

}
