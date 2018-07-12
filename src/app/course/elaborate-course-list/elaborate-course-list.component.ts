import { Component, OnInit } from '@angular/core';
import {Course} from '../../model/Course';
import {CourseService} from '../../service/course/course.service';

@Component({
  selector: 'app-elaborate-course',
  templateUrl: './elaborate-course-list.component.html',
  styleUrls: ['./elaborate-course-list.component.css']
})
export class ElaborateCourseListComponent implements OnInit {

  elaborateCourses: Course[];

  constructor(private elaborateCourseService: CourseService) { }

  ngOnInit() {
    // TODO The enterprise ID is hard coded
    this.elaborateCourseService.getAll(1).subscribe(result => {
      this.elaborateCourses = result.list;
    });
  }

}
