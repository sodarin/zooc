import { Injectable } from '@angular/core';
import { Branch } from '../../model/Branch';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BranchService {

  // branches: Branch[] = [
  //   new Branch('1', '1', '东软第一分部', '这里是一个地址', 0, 0, '18804015102'),
  //   new Branch('2', '2', '中软第一分部', '这里是一个地址', 0, 0, '18804015102'),
  //   new Branch('3', '1', '东软第二分部', '这里是一个地址', 0, 0, '18804015102'),
  //   new Branch('4', '1', '东软第三分部', '这里是一个地址', 0, 0, '18804015102'),
  //   new Branch('5', '1', '东软第四分部', '这里是一个地址', 0, 0, '18804015102'),
  //   new Branch('6', '3', '58同城第一分部', '这里是一个地址', 0, 0, '18804015102'),
  //   new Branch('7', '1', '东软第五分部', '这里是一个地址', 0, 0, '18804015102'),
  //
  // ];

  constructor(private _http: HttpClient) { }

  getAll(enterpriseId: number,
         branchId: number = null, nameContaining: string = null,
         addressContaining: string = null): Observable<any> {
    return this._http.get(`/api/v1/enterprise/${enterpriseId}/branch/list`);
  }

  getId(branchId: number): Observable<Branch> {
    return this._http.get<Branch>(`/api/v1/branch/${branchId}`);
  }
}
