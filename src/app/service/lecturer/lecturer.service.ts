import { Injectable } from '@angular/core';
import {Lecturer} from '../../model/Lecturer.model';

@Injectable({
  providedIn: 'root'
})
export class LecturerService {

  lecturers: Lecturer[] = [
    new Lecturer('1', '1', '周洁', '../../../assets/img/free-trial/5a39cd3f0001c09805400300.jpg', 'aslk;dfjawioeruwpoieacklvnaklsdjfalksjdf;alksjdfiowejasdasd'),
    new Lecturer('2', '2', '陈子康', '../../../assets/img/free-trial/5a39cd3f0001c09805400300.jpg', 'aslk;dfjawioeruwpoieacklvnaklsdjfalksjdf;alksjdfiowejasdasd'),
    new Lecturer('3', '1', '李翰芃', '../../../assets/img/free-trial/5a39cd3f0001c09805400300.jpg', 'aslk;dfjawioeruwpoieacklvnaklsdjfalksjdf;alksjdfiowejasdasdasdfawerdadfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadfwefasdasdfasdf'),
    new Lecturer('4', '1', '陈达', '../../../assets/img/free-trial/5a39cd3f0001c09805400300.jpg', 'aslk;dfjawioeruwpoieacklvnaklsdjfalksjdf;alksjdfiowejasdasd'),
    new Lecturer('5', '3', '奥逊风', '../../../assets/img/free-trial/5a39cd3f0001c09805400300.jpg', 'aslk;dfjawioeruwpoieacklvnaklsdjfalksjdf;alksjdfiowejasdasd'),
    new Lecturer('6', '3', '田野', '../../../assets/img/free-trial/5a39cd3f0001c09805400300.jpg', 'aslk;dfjawioeruwpoieacklvnaklsdjfalksjdf;alksjdfiowejasdasd'),

  ];

  constructor() { }

  getLecturersById(enterpriseId: string): Lecturer[] {
    return this.lecturers.filter(lecturer => lecturer.enterpriseId == enterpriseId);
  }
}
