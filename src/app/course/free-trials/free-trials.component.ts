import { Component, OnInit } from '@angular/core';
import {Trial} from '../../model/Trial';
import {FreeTrialService} from '../../service/course/free-trial/free-trial.service';

@Component({
  selector: 'app-free-trials',
  templateUrl: './free-trials.component.html',
  styleUrls: ['./free-trials.component.css']
})
export class FreeTrialsComponent implements OnInit {

  freeTrials: Trial[];

  constructor(private freeTrailService: FreeTrialService) { }

  ngOnInit() {
    // TODO The enterprise ID is hard coded
    this.freeTrailService.getAll(1).subscribe(result => {
      this.freeTrials = result.list;
    });
  }

}
