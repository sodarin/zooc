import { Injectable } from '@angular/core';
import {Reserve} from '../../model/Reserve.model';
import {ReservationEnum} from '../../model/enum/ReservationEnum';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {TrialStatusEnum} from '../../model/enum/TrialStatusEnum';

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

  constructor(private _http: HttpClient) { }

  createReservation(trialId: number, userId: string, message: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this._http.post(`/api/v1/trial/${trialId}/reservation`, {
      userId: userId,
      message: message
    }, httpOptions)
  }

  updateReservationMessage(reservationId: number, message: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this._http.put(`/api/v1/reservation/${reservationId}`, {
      message: message
    })
  }

  updateReservationStatus(reservationId: number, status: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this._http.put(`/api/v1/reservation/${reservationId}`, {
      status: status
    })
  }

  getReservationListByUserId(userId: string): Observable<any> {
    return this._http.get(`/api/v1/user/${userId}/reservation/list`);
  }


}

export class ReservationDetail {
  constructor(
    public reservationId: number,
    public userId: number,
    public username: string,
    public userEmail: string,
    public userMobile: string,
    public enterpriseId: number,
    public trialId: number,
    public trialName: string,
    public time: Date,
    public message: string,
    public status: string
  ) {}
}
