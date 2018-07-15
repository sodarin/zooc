import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import { TrialService } from '../../service/trial/trial.service';
import { Trial } from '../../model/Trial';
import {ReservationEnum} from '../../model/enum/ReservationEnum';
import {ReserveService} from '../../service/reserve/reserve.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-reserve-item',
  templateUrl: './reserve-item.component.html',
  styleUrls: ['./reserve-item.component.css']
})
export class ReserveItemComponent implements OnInit, OnChanges {

  @Input() item;
  @Output() statusChangeEvent = new EventEmitter<any>();

  freeTrial: Trial;
  reservationEnum = ReservationEnum;

  constructor(private freeTrialService$: TrialService, private reservationService$: ReserveService, private snackBar: MatSnackBar) { }

  ngOnInit() {}

  ngOnChanges() {
    this.freeTrialService$.getDetailById(this.item.trialId)
      .subscribe(result => {
        this.freeTrial = result;
      })
  }

  changeStatus(status: string) {
    this.reservationService$.updateReservationStatus(this.item.reservationId, status)
      .subscribe(result => {
        this.item.status = status;
        this.snackBar.open(`${status == 'USED'? '使用': '取消'}成功`, null, {
          duration: 2000
        });
        this.statusChangeEvent.emit();
      }, error2 => {
        this.snackBar.open(error2.error);
      })
  }

}
