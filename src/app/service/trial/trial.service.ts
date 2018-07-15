import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Trial } from '../../model/Trial';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrialService {

  constructor(private _http: HttpClient) { }

  getAll(enterpriseId: number,
         trialId: number = null, nameContaining: string = null,
         branchId: number = null, branchNameContaining: string = null,
         categoryId: number = null,
         lecturerNameContaining: string = null): Observable<any> {
    const params = new HttpParams()
      .set('trialId', trialId ? trialId.toString() : '')
      .set('branchId', branchId ? branchId.toString() : '')
      .set('branchNameContaining', branchNameContaining ? branchNameContaining : '')
      .set('categoryId', categoryId ? categoryId.toString() : '')
      .set('lecturerNameContaining', lecturerNameContaining ? lecturerNameContaining : '');
    return this._http.get(`/api/v1/enterprise/${enterpriseId}/trial/list`, { params: params });
  }

  getLatest(enterpriseId: number, n: number): Observable<Trial[]> {
    return this._http.get<Trial[]>(`/api/v1/enterprise/${enterpriseId}/trial/latest?n=${n}`);
  }

  getDetailById(trialId: number): Observable<Trial> {
    return this._http.get<Trial>(`/api/v1/trial/detail/${trialId}`);
  }
}
