import { Component, OnInit } from '@angular/core';
import {ElaborateCourse} from '../../model/ElaborateCourse.model';
import {ElaborateCourseService} from '../../service/course/elaborate-course/elaborate-course.service';

@Component({
  selector: 'app-elaborate-course',
  templateUrl: './elaborate-course.component.html',
  styleUrls: ['./elaborate-course.component.css']
})
export class ElaborateCourseComponent implements OnInit {

  elaborateCourses: ElaborateCourse[];

  constructor(private elaborateCourseService: ElaborateCourseService) { }

  ngOnInit() {
    this.elaborateCourses = this.elaborateCourseService.getElaborateCourse();
  }

}
