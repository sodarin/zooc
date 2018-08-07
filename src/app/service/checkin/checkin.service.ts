import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckinService {

  constructor(private _http: HttpClient) { }

  checkCheckedInOrNot(userId: number, enterpriseId: number, date: Date): Observable<boolean> {
    const params = new HttpParams()
      .set('userId', userId ? userId.toString() : null)
      .set('enterpriseId', enterpriseId ? enterpriseId.toString() : null)
      .set('date', date ? date.getTime().toString() : null);
    return this._http.get<boolean>(`/api/v1/checkin`, { params: params });
  }

  checkIn(userId: number, enterpriseId: number): Observable<any> {
    return this._http.post(`/api/v1/checkin`, {
      userId: userId,
      enterpriseId: enterpriseId
    });
  }
}
