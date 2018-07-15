import { Injectable } from '@angular/core';
import { Branch } from '../../model/Branch';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BranchService {



  httpOptions = {
    headers: new HttpHeaders().set('Content-Type', 'application/json')
  };

  constructor(private _http: HttpClient) { }

  getAll(enterpriseId: number,
         branchId: number = null, nameContaining: string = null,
         addressContaining: string = null): Observable<any> {
    const params = new HttpParams()
      .set('branchId', branchId ? branchId.toString() : '')
      .set('nameContaining', nameContaining ? nameContaining : '')
      .set('addressContaining', addressContaining ? addressContaining : '');
    return this._http.get(`/api/v1/enterprise/${enterpriseId}/branch/list`, { params: params });
  }

  getId(branchId: number): Observable<Branch> {
    return this._http.get<Branch>(`/api/v1/branch/${branchId}`);
  }
}
