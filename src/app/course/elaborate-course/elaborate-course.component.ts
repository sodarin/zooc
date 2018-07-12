import { Component, OnInit } from '@angular/core';
import {Course} from '../../model/Course';
import {ElaborateCourseService} from '../../service/course/elaborate-course/elaborate-course.service';

@Component({
  selector: 'app-elaborate-course',
  templateUrl: './elaborate-course.component.html',
  styleUrls: ['./elaborate-course.component.css']
})
export class ElaborateCourseComponent implements OnInit {

  elaborateCourses: Course[];

  constructor(private elaborateCourseService: ElaborateCourseService) { }

  ngOnInit() {
    // TODO The enterprise ID is hard coded
    this.elaborateCourseService.getAll(1).subscribe(result => {
      this.elaborateCourses = result.list;
    });
  }

}
