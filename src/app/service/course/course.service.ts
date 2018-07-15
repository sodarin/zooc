import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Course } from '../../model/Course';
import { CourseStatusEnum } from '../../model/enum/CourseStatusEnum';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  // elaborateCourse = [
  //   new Course('1', '../../../assets/img/free-trial/5a39cd3f0001c09805400300.jpg', '全网最热Python3入门', 336.00, '初级', 510),
  //   new Course('2', '../../../assets/img/free-trial/5ac2dfe100014a9005400300.jpg', '分布式事务实践', 348.00, '高级', 130),
  //   new Course('3', '../../../assets/img/free-trial/5b2a29d50001bf4605400300.jpg', 'Python3入门机器学习', 400.00, '初级', 600),
  //   new Course('4', '../../../assets/img/free-trial/59b8a486000107fb05400300.jpg', 'Vue2.5开发从零基础入门到实战项目', 226.00, '中级', 410)
  // ];

  constructor(private _http: HttpClient) { }

  getAll(enterpriseId: number,
         courseId: number = null, nameContaining: string = null,
         categoryId: number = null,
         priceMin: number = null, priceMax: number = null,
         status: CourseStatusEnum = null): Observable<any> {
    const params = new HttpParams()
      .set('courseId', courseId ? courseId.toString() : '')
      .set('nameContaining', nameContaining ? nameContaining : '')
      .set('categoryId', categoryId ? categoryId.toString() : '')
      .set('priceMin', priceMin ? priceMin.toString() : '')
      .set('priceMax', priceMax ? priceMax.toString() : '')
      .set('status', status ? status.toString() : '');
    return this._http.get(`/api/v1/enterprise/${enterpriseId}/course/list`, { params: params });
  }

  getLatest(enterpriseId: number, n: number): Observable<Course[]> {
    return this._http.get<Course[]>(`/api/v1/enterprise/${enterpriseId}/course/latest?n=${n}`);
  }

  getDetailById(courseId: string): Observable<Course> {
    return this._http.get<Course>(`/api/v1/course/detail/${courseId}`);
  }
}
