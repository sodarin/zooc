import { Component, OnInit } from '@angular/core';
import {Lecturer} from '../../../model/Lecturer.model';
import {LecturerService} from '../../../service/lecturer/lecturer.service';
import {Location} from '@angular/common';


@Component({
  selector: 'app-faculty-list',
  templateUrl: './lecturer-list.component.html',
  styleUrls: ['./lecturer-list.component.css']
})
export class LecturerListComponent implements OnInit {

  lecturers: Lecturer[];

  constructor( private lecturerService$: LecturerService, private location: Location) { }

  ngOnInit() {
    const id = this.location.path().slice(12,13);
    this.lecturers = this.lecturerService$.getLecturersById(id);
  }

}
