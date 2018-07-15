import { Injectable } from '@angular/core';

import { Order } from '../../model/Order';
import { OrderStatusEnum } from '../../model/enum/OrderStatusEnum';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {






  httpOptions = {
    headers: new HttpHeaders().set('Content-Type', 'application/json')
  };

  constructor(private _http: HttpClient) { }

  create(courseId: number, userId: number): Observable<number> {
    return this._http.post<number>(`/api/v1/course/${courseId}/order`, {
      userId: userId.toString()
    }, this.httpOptions);
  }

  async createAsync(courseId: number, userId: number): Promise<number> {
    return await this.create(courseId, userId).toPromise();
  }

  getHistory(userId: number,
             courseId: number = null, courseNameContaining: string = null,
             orderId: number = null,
             status: OrderStatusEnum = null): Observable<any> {
    const params = new HttpParams()
    .set('orderId', orderId ? orderId.toString() : '')
    .set('courseId', courseId ? courseId.toString() : '')
    .set('courseNameContaining', courseNameContaining ? courseNameContaining : '')
    .set('status', status ? status.toString() : '');
    return this._http.get(`/api/v1/user/${userId}/order/list`, { params: params });
  }

  getDetailById(orderId: number): Observable<Order> {
    return this._http.get<Order>(`/api/v1/order/detail/${orderId}`);
  }

  async getDetailByIdAsync(orderId: number): Promise<Order> {
    return await this.getDetailById(orderId).toPromise();
  }

  update(orderId: number, status: OrderStatusEnum): Observable<any> {
    return this._http.put(`/api/v1/order/${orderId}`, {
      status: OrderStatusEnum[status]
    }, this.httpOptions);
  }


}

export class OrderDetail {
  constructor(
    public  orderId: number,
    public  userId: number,
    public  username: string,
    public  userEmail: string,
    public  userMobile: string,
    public  enterpriseId: number,
    public  courseId: number,
    public  courseName: string,
    public  coursePrice: number,
    public  time: Date,
    public  status: string,
    public  refundId: number,
    public  refundTime: Date,
    public  refundReason: string
  ){}
}
