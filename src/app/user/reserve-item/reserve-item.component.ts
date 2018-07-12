import { Component, Input, OnInit } from '@angular/core';
import { FreeTrialService } from '../../service/course/free-trial/free-trial.service';
import { Trial } from '../../model/Trial';

@Component({
  selector: 'app-reserve-list',
  templateUrl: './reserve-item.component.html',
  styleUrls: ['./reserve-item.component.css']
})
export class ReserveItemComponent implements OnInit {

  @Input() item;

  freeTrial: Trial;

  constructor(private freeTrialService: FreeTrialService) { }

  ngOnInit() {

    // this.freeTrial = this.freeTrialService.getFreeTrialsById(this.item.trialId);
  }

}
