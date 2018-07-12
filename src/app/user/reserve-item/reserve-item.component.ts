import { Component, Input, OnInit } from '@angular/core';
import { TrialService } from '../../service/trial/trial.service';
import { Trial } from '../../model/Trial';

@Component({
  selector: 'app-reserve-item',
  templateUrl: './reserve-item.component.html',
  styleUrls: ['./reserve-item.component.css']
})
export class ReserveItemComponent implements OnInit {

  @Input() item;

  freeTrial: Trial;

  constructor(private freeTrialService: TrialService) { }

  ngOnInit() {

    // this.freeTrial = this.freeTrialService.getFreeTrialsById(this.item.trialId);
  }

}
