import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Coupon} from '../../model/Coupon';

@Injectable({
  providedIn: 'root'
})
export class CouponService {

  constructor(private _http: HttpClient) { }

  getUserAvailable(enterpriseId: number, userId: number, price: number): Observable<Coupon[]> {
    const params = new HttpParams()
      .set('enterpriseId', enterpriseId ? enterpriseId.toString() : '')
      .set('userId', userId ? userId.toString() : '')
      .set('price', price ? price.toString() : '');
    return this._http.get<Coupon[]>(`/api/v1/enterprise/${enterpriseId}/coupon/user-available`, { params: params });
  }
}
