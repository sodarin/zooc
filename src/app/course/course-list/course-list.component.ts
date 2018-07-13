import { Component, OnInit } from '@angular/core';
import {Course} from '../../model/Course';
import {CourseService} from '../../service/course/course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  elaborateCourses: Course[];

  constructor(private courseService$: CourseService) { }

  ngOnInit() {
    // TODO The enterprise ID is hard coded
    this.courseService$.getAll(1).subscribe(result => {
      this.elaborateCourses = result.list;
    });
  }

}
