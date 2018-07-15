import { Component, OnInit } from '@angular/core';
import { Course } from '../../model/Course';
import { CourseService } from '../../service/course/course.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

  elaborateCourses: Course[];

  constructor(private router: Router,
              private routeInfo: ActivatedRoute,
              private courseService$: CourseService) { }

  ngOnInit() {
    // TODO The enterprise ID is hard coded
    this.courseService$.getAll(1).subscribe(result => {
      this.elaborateCourses = result.list;
    });
  }

  navToCourseDetailPage(item: Course) {
    this.router.navigate([`${item.courseId}`], { relativeTo: this.routeInfo });
  }
}
