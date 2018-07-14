import { Injectable } from '@angular/core';
import { Order } from '../../model/Order';
import { OrderStatusEnum } from '../../model/enum/OrderStatusEnum';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  // order: Order[] = [
  //   new Order('158911520', '1', '1', '2018-6-25 11:11:50', OrderStatusEnum.PENDING),
  //   new Order('158911520', '1', '2', '2018-6-25 11:11:50', OrderStatusEnum.CANCELED),
  //   new Order('158911520', '3', '1', '2018-6-25 11:11:50', OrderStatusEnum.AVAILABLE),
  //   new Order('158911520', '1', '3', '2018-6-25 11:11:50', OrderStatusEnum.REFUNDED),
  //   new Order('158911520', '1', '3', '2018-6-25 11:11:50', OrderStatusEnum.REFUND_REQUESTED),
  //   new Order('158911520', '1', '1', '2018-6-25 11:11:50', OrderStatusEnum.AVAILABLE),
  // ];

  httpOptions = {
    headers: new HttpHeaders().set('Content-Type', 'application/json')
  };

  constructor(private _http: HttpClient) { }

  create(courseId: number, userId: number): Observable<number> {
    return this._http.post<number>(`/api/v1/course/${courseId}/order`, {
      userId: userId.toString()
    }, this.httpOptions);
  }

  getHistory(userId: number,
             courseId: number = null, courseNameContaining: string = null,
             orderId: number = null,
             status: OrderStatusEnum = null): Observable<any> {
    const params = new HttpParams();
    params.set('orderId', orderId ? orderId.toString() : null);
    params.set('courseId', courseId ? courseId.toString() : null);
    params.set('courseNameContaining', courseNameContaining);
    params.set('status', status ? status.toString() : null);
    return this._http.get(`/api/v1/user/${userId}/order/list`, { params: params });
  }

  getDetailById(orderId: number): Observable<Order> {
    return this._http.get<Order>(`/api/v1/order/detail/${orderId}`);
  }

  update(orderId: number, status: OrderStatusEnum): Observable<any> {
    return this._http.put(`/api/v1/order/${orderId}`, {
      status: OrderStatusEnum[status]
    }, this.httpOptions);
  }
}
