import { Injectable } from '@angular/core';
import { Enterprise } from '../../model/Enterprise';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnterpriseService {

  // enterprises: Enterprise[] = [
  //   new Enterprise('1', '东软睿道', '../../../assets/img/free-trial/5a39cd3f0001c09805400300.jpg', '这是东软集团', '', ''),
  //   new Enterprise('2', '中软', '../../../assets/img/free-trial/5a39cd3f0001c09805400300.jpg', '这不是东软集团', '', ''),
  //   new Enterprise('3', '东北大学', '../../../assets/img/free-trial/5a39cd3f0001c09805400300.jpg', '这不是东软集团', '', ''),
  //   new Enterprise('4', '北大青鸟', '../../../assets/img/free-trial/5a39cd3f0001c09805400300.jpg', '这不是东软集团', '', ''),
  //   new Enterprise('5', '蓝翔科技', '../../../assets/img/free-trial/5a39cd3f0001c09805400300.jpg', '这不是东软集团', '', ''),
  //   new Enterprise('6', '新东方编程学校', '../../../assets/img/free-trial/5a39cd3f0001c09805400300.jpg', '这不是东软集团', '', ''),
  //   new Enterprise('7', '这是一个拥有很长很长很长名字的企业', '../../../assets/img/free-trial/5a39cd3f0001c09805400300.jpg', '这不是东软集团，而且是一个简介很长很长很长的企业', '', ''),
  // ];

  constructor(private _http: HttpClient) { }

  getById(enterpriseId: number): Observable<Enterprise> {
    return this._http.get<Enterprise>(`/api/v1/enterprise/${enterpriseId}`);
  }
}
