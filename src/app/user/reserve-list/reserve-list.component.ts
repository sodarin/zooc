import {Component, Input, OnInit} from '@angular/core';
import {FreeTrialService} from '../../service/course/free-trial/free-trial.service';
import {FreeTrial} from '../../model/FreeTrialModel';

@Component({
  selector: 'app-reserve-list',
  templateUrl: './reserve-list.component.html',
  styleUrls: ['./reserve-list.component.css']
})
export class ReserveListComponent implements OnInit {

  @Input() item;

  freeTrial: FreeTrial;

  constructor(private freeTrialService: FreeTrialService) { }

  ngOnInit() {

    this.freeTrial = this.freeTrialService.getFreeTrialsById(this.item.trialId);
  }

}
