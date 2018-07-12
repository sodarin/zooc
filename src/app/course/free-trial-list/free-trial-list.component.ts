import { Component, OnInit } from '@angular/core';
import { Trial } from '../../model/Trial';
import { TrialService } from '../../service/trial/trial.service';

@Component({
  selector: 'app-free-trials',
  templateUrl: './free-trial-list.component.html',
  styleUrls: ['./free-trial-list.component.css']
})
export class FreeTrialListComponent implements OnInit {

  freeTrials: Trial[];

  constructor(private freeTrailService: TrialService) { }

  ngOnInit() {
    // TODO The enterprise ID is hard coded
    this.freeTrailService.getAll(1).subscribe(result => {
      this.freeTrials = result.list;
    });
  }

}
