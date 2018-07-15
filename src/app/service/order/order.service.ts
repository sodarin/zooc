import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class OrderService {



  constructor(private _http: HttpClient) { }

  getOrderByUserId(userId: string): Observable<any> {
    return this._http.get(`/api/v1/user/${userId}/order/list`);
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
