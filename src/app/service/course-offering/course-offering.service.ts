import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CourseOffering } from '../../model/CourseOffering';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseOfferingService {

  constructor(private _http: HttpClient) { }

  // TODO Filter not implemented
  getAll(courseId: number,
         courseOfferingId: number = null,
         branchId: number = null, branchNameContaining: string = null,
         lecturerId: number = null, lecturerNameContaining: string = null):
    Observable<any> {
    return this._http.get(`/api/v1/course/${courseId}/offering/list`);
  }

  getDetailById(courseOfferingId: number): Observable<CourseOffering> {
    return this._http.get<CourseOffering>(`/api/v1/offering/${courseOfferingId}`);
  }
}
