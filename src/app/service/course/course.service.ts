import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Course } from '../../model/Course';
import { CourseStatusEnum } from '../../model/enum/CourseStatusEnum';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {


  constructor(private _http: HttpClient) { }

  getAll(enterpriseId: number,
         courseId: number = null, nameContaining: string = null,
         categoryId: number = null,
         priceMin: number = null, priceMax: number = null,
         status: string = null): Observable<any> {
    const params = new HttpParams()
      .set('courseId', courseId ? courseId.toString() : '')
      .set('nameContaining', nameContaining ? nameContaining : '')
      .set('categoryId', categoryId ? categoryId.toString() : '')
      .set('priceMin', priceMin ? priceMin.toString() : '')
      .set('priceMax', priceMax ? priceMax.toString() : '')
      .set('status', status ? status : '');
    return this._http.get(`/api/v1/enterprise/${enterpriseId}/course/list`, { params: params });
  }

  getLatest(enterpriseId: number, n: number): Observable<Course[]> {
    return this._http.get<Course[]>(`/api/v1/enterprise/${enterpriseId}/course/latest?n=${n}`);
  }

  getDetailById(courseId: string): Observable<Course> {
    return this._http.get<Course>(`/api/v1/course/detail/${courseId}`);
  }
}
