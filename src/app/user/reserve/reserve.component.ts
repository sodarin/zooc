import { Component, OnInit } from '@angular/core';
import {ReserveService} from '../../service/reserve/reserve.service';
import {Reserve} from '../../model/Reserve.model';
import {LoginService} from '../../service/login/login.service';

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.css']
})
export class ReserveComponent implements OnInit {

  reserves: Reserve[];

  pendingReservation: Reserve[];
  availableReservation: Reserve[];
  processedReservation: Reserve[];

  constructor(private reserve: ReserveService, private login: LoginService) { }

  ngOnInit() {
    this.reserves = this.reserve.getReserveById(this.login.resultUser.userId);
    this.pendingReservation = this.reserves.filter(reserve => reserve.status == 0);
    this.availableReservation = this.reserves.filter(reserve => reserve.status == 2);
    this.processedReservation = this.reserves.filter(reserve => reserve.status != 0 && reserve.status != 2);

  }

}
