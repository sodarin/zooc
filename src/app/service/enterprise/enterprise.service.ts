import { Injectable } from '@angular/core';
import { Enterprise } from '../../model/Enterprise';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnterpriseService {


  constructor(private _http: HttpClient) { }

  getById(enterpriseId: number): Observable<Enterprise> {
    return this._http.get<Enterprise>(`/api/v1/enterprise/${enterpriseId}`);
  }
}
