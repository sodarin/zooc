import { Component, OnInit } from '@angular/core';
import {Trial} from '../../model/Trial';
import {TrialService} from '../../service/trial/trial.service';

@Component({
  selector: 'app-free-trials',
  templateUrl: './free-trials.component.html',
  styleUrls: ['./free-trials.component.css']
})
export class FreeTrialsComponent implements OnInit {

  freeTrials: Trial[];

  constructor(private freeTrailService: TrialService) { }

  ngOnInit() {
    // TODO The enterprise ID is hard coded
    this.freeTrailService.getAll(1).subscribe(result => {
      this.freeTrials = result.list;
    });
  }

}
