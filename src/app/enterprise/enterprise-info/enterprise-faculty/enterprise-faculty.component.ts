import { Component, OnInit } from '@angular/core';
import {Lecturer} from '../../../model/Lecturer.model';
import {LecturerService} from '../../../service/lecturer/lecturer.service';
import {Location} from '@angular/common';


@Component({
  selector: 'app-enterprise-faculty',
  templateUrl: './enterprise-faculty.component.html',
  styleUrls: ['./enterprise-faculty.component.css']
})
export class EnterpriseFacultyComponent implements OnInit {

  lecturers: Lecturer[];

  constructor( private lecturerService$: LecturerService, private location: Location) { }

  ngOnInit() {
    const id = this.location.path().slice(12,13);
    this.lecturers = this.lecturerService$.getLecturersById(id);
  }

}
