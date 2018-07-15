import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CourseOffering } from '../../model/CourseOffering';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseOfferingService {

  constructor(private _http: HttpClient) { }

  getAll(courseId: number,
         courseOfferingId: number = null,
         branchId: number = null, branchNameContaining: string = null,
         lecturerId: number = null, lecturerNameContaining: string = null):
    Observable<any> {
    const params = new HttpParams()
      .set('courseOfferingId', courseOfferingId ? courseOfferingId.toString() : '')
      .set('branchId', branchId ? branchId.toString() : '')
      .set('lecturerId', lecturerId ? lecturerId.toString() : '')
      .set('lecturerNameContaining', lecturerNameContaining ? lecturerNameContaining : '');
    return this._http.get(`/api/v1/course/${courseId}/offering/list`);
  }

  getDetailById(courseOfferingId: number): Observable<CourseOffering> {
    return this._http.get<CourseOffering>(`/api/v1/offering/${courseOfferingId}`);
  }
}
