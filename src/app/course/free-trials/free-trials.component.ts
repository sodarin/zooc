import { Component, OnInit } from '@angular/core';
import {FreeTrial} from '../../model/FreeTrialModel';
import {FreeTrialService} from '../../service/course/free-trial/free-trial.service';

@Component({
  selector: 'app-free-trials',
  templateUrl: './free-trials.component.html',
  styleUrls: ['./free-trials.component.css']
})
export class FreeTrialsComponent implements OnInit {

  freeTrials: FreeTrial[];

  constructor(private freeTrailService: FreeTrialService) { }

  ngOnInit() {
    this.freeTrials = this.freeTrailService.getFreeTrials();
  }

}
