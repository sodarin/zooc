import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MomentService {


  constructor(private _http: HttpClient) { }

  getMomentsByEnterpriseId(enterpriseId: number, usePagination: boolean, targetPage: number, pageSize: number): Observable<any> {
    return this._http.get(`/api/v1/enterprise/${enterpriseId}/moment/list?usePagination=true&targetPage=${targetPage}&pageSize=${pageSize}`);
  }

  getMomentImgList(momentId: number): Observable<any> {
    return this._http.get(`/api/v1/moment/${momentId}/img/list`);
  }

  getMomentLikeNum(momentId: number): Observable<any> {
    return this._http.get(`/api/v1/moment/${momentId}/like/total`);
  }

  hasLiked(momentId: number, userId: string): Observable<any> {
    return this._http.get(`/api/v1/moment/${momentId}/like?&userId=${userId}`)
  }

  getMomentLatestLikeLikst(momentId: number, n: number): Observable<any> {
    return this._http.get(`/api/v1/moment/${momentId}/like/latest?n=${n}`)
  }

  getMomentCommentList(momentId: number, usePagination: boolean, targetPage: number, pageSize: number): Observable<any> {
    return this._http.get(`/api/v1/moment/${momentId}/comment/list?usePagination=true&targetPage=${targetPage}&pageSize=${pageSize}`);
  }
}

export class MomentLikeDetail {
  constructor(
    public momentLikeId: number,
    public userId: number,
    public username: string,
    public userEmail: string,
    public userMobile: string,
    public time: Date
  ) {}
}

export class MomentImg {
  constructor(
    public momentImgIndex: number,
    public momentId: number,
    public imgUrl: string
  ) {}
}
