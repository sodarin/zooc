import { Injectable } from '@angular/core';
import {Reserve} from '../../model/Reserve.model';
import {ReservationEnum} from '../../model/enum/ReservationEnum';

@Injectable({
  providedIn: 'root'
})
export class ReserveService {

  reserves: Reserve[] = [
    new Reserve('158911520', '1', '1', '2018-6-25 11:11:50', '费圆圆', ReservationEnum.AVAILABLE),
    new Reserve('158911520', '1', '2', '2018-6-25 11:11:50', '费圆圆', ReservationEnum.PENDING),
    new Reserve('158911520', '3', '1', '2018-6-25 11:11:50', '费圆圆',ReservationEnum.CANCELED),
    new Reserve('158911520', '1', '3', '2018-6-25 11:11:50', '费圆圆', ReservationEnum.USED),
    new Reserve('158911520', '1', '1', '2018-6-25 11:11:50', '费圆圆',ReservationEnum.CANCELED),

  ];

  constructor() { }

  getReserveById(userId: string): Reserve[] {
    return this.reserves.filter(reserve => reserve.userId == userId );
  }
}
