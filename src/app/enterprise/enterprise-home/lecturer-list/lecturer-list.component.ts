import { Component, OnInit } from '@angular/core';
import {Lecturer} from '../../../model/Lecturer';
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
    // TODO The enterprise ID is hard coded
    this.lecturerService$.getAll(1).subscribe(result => {
      this.lecturers = result.list;
    });
  }

}
