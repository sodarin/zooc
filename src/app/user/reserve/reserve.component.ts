import { Component, OnInit } from '@angular/core';
import {ReservationDetail, ReserveService} from '../../service/reserve/reserve.service';
import {Reserve} from '../../model/Reserve.model';
import {LoginService} from '../../service/login/login.service';
import {ReservationEnum} from '../../model/enum/ReservationEnum';

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.css']
})
export class ReserveComponent implements OnInit {

  reserves: ReservationDetail[];

  pendingReservation: ReservationDetail[];
  availableReservation: ReservationDetail[];
  processedReservation: ReservationDetail[];
  canceledReservation: ReservationDetail[];

  constructor(private reservationService$: ReserveService, private loginService$: LoginService) { }

  ngOnInit() {
    this.getReservations();
  }

  getReservations() {
    this.reservationService$.getReservationListByUserId(this.loginService$.resultUser.userId)
      .subscribe(result => {
        this.reserves = result.list;
        this.pendingReservation = this.reserves.filter(reserve => reserve.status == ReservationEnum[ReservationEnum.PENDING]);
        this.availableReservation = this.reserves.filter(reserve => reserve.status == ReservationEnum[ReservationEnum.AVAILABLE]);
        this.canceledReservation = this.reserves.filter(reserve => reserve.status == ReservationEnum[ReservationEnum.CANCELED]);
        this.processedReservation = this.reserves.filter(reserve => reserve.status == ReservationEnum[ReservationEnum.EXPIRED] || reserve.status == ReservationEnum[ReservationEnum.USED]);
      });
  }

  refresh() {
    this.getReservations();
  }

}
