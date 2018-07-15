import { Injectable } from '@angular/core';
import { Lecturer } from '../../model/Lecturer';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LecturerService {

  constructor(private _http: HttpClient) { }

  getAll(enterpriseId: number,
         lecturerId: number = null, name: string = null): Observable<any> {
    const params = new HttpParams()
      .set('lecturerId', lecturerId ? lecturerId.toString() : '')
      .set('name', name ? name : '');
    return this._http.get(`/api/v1/enterprise/${enterpriseId}/lecturer/list`, { params: params });
  }

  getById(lecturerId: number): Observable<Lecturer> {
    return this._http.get<Lecturer>(`/api/v1/lecturer/${lecturerId}`);
  }
}
