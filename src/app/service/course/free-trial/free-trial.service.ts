import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Trial } from '../../../model/Trial';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FreeTrialService {

  // freeTrials = [
  //   new Trial('1', '../../../assets/img/free-trial/5a39cd3f0001c09805400300.jpg', '全网最热Python3入门', 336.00, '初级', 510),
  //   new Trial('2', '../../../assets/img/free-trial/5ac2dfe100014a9005400300.jpg', '分布式事务实践', 348.00, '高级', 130),
  //   new Trial('3', '../../../assets/img/free-trial/5b2a29d50001bf4605400300.jpg', 'Python3入门机器学习 经典算法与应用', 400.00, '初级', 600),
  //   new Trial('4', '../../../assets/img/free-trial/59b8a486000107fb05400300.jpg', 'Vue2.5开发从零基础入门到实战项目', 226.00, '中级', 410)
  // ];

  constructor(private _http: HttpClient) { }

  getAll(enterpriseId: number,
         trialId: number = null, nameContaining: string = null,
         branchId: number = null, branchNameContaining: string = null,
         categoryId: number = null,
         lecturerNameContaining: string = null): Observable<any> {
    return this._http.get(`/api/v1/enterprise/${enterpriseId}/trial/list`);
  }

  getLatest(enterpriseId: number, n: number): Observable<Trial[]> {
    return this._http.get<Trial[]>(`/api/v1/enterprise/${enterpriseId}/trial/latest?n=${n}`);
  }

  getDetailById(trialId: number): Observable<Trial> {
    return this._http.get<Trial>(`/api/v1/trial/detail/${trialId}`);
  }
}
