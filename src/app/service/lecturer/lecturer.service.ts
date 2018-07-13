import { Injectable } from '@angular/core';
import { Lecturer } from '../../model/Lecturer';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LecturerService {

  // lecturers: Lecturer[] = [
  //   new Lecturer('1', '1', '周洁', '../../../assets/img/free-trial/5a39cd3f0001c09805400300.jpg', 'aslk;dfjawioeruwpoieacklvnaklsdjfalksjdf;alksjdfiowejasdasd'),
  //   new Lecturer('2', '2', '陈子康', '../../../assets/img/free-trial/5a39cd3f0001c09805400300.jpg', 'aslk;dfjawioeruwpoieacklvnaklsdjfalksjdf;alksjdfiowejasdasd'),
  //   new Lecturer('3', '1', '李翰芃', '../../../assets/img/free-trial/5a39cd3f0001c09805400300.jpg', 'aslk;dfjawioeruwpoieacklvnaklsdjfalksjdf;alksjdfiowejasdasdasdfawerdadfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadfwefasdasdfasdf'),
  //   new Lecturer('4', '1', '陈达', '../../../assets/img/free-trial/5a39cd3f0001c09805400300.jpg', 'aslk;dfjawioeruwpoieacklvnaklsdjfalksjdf;alksjdfiowejasdasd'),
  //   new Lecturer('5', '3', '奥逊风', '../../../assets/img/free-trial/5a39cd3f0001c09805400300.jpg', 'aslk;dfjawioeruwpoieacklvnaklsdjfalksjdf;alksjdfiowejasdasd'),
  //   new Lecturer('6', '3', '田野', '../../../assets/img/free-trial/5a39cd3f0001c09805400300.jpg', 'aslk;dfjawioeruwpoieacklvnaklsdjfalksjdf;alksjdfiowejasdasd'),
  //
  // ];

  constructor(private _http: HttpClient) { }

  getAll(enterpriseId: number, lecturerId: number = null, name: string = null): Observable<any> {
    return this._http.get(`/api/v1/enterprise/${enterpriseId}/lecturer/list`);
  }

  getById(lecturerId: number): Observable<Lecturer> {
    return this._http.get<Lecturer>(`/api/v1/lecturer/${lecturerId}`);
  }
}
