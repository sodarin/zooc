import { Component, OnInit } from '@angular/core';
import { Course } from '../../model/Course';
import { CourseService } from '../../service/course/course.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SearchPageComponent} from '../search-page/search-page.component';
import {MatBottomSheet} from '@angular/material';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  elaborateCourses: Course[];

  constructor(private router: Router,
              private routeInfo: ActivatedRoute,
              private courseService$: CourseService,
              private bottomSheet: MatBottomSheet) { }

  ngOnInit() {
    // TODO The enterprise ID is hard coded
    this.courseService$.getAll(1).subscribe(result => {
      this.elaborateCourses = result.list;
    });
  }

  navToCourseDetailPage(item: Course) {
    this.router.navigate([`${item.courseId}`], { relativeTo: this.routeInfo });
  }

  openBottomSheet() {
    const bottomSheet = this.bottomSheet.open(SearchPageComponent);
    bottomSheet.afterDismissed().subscribe(result => {
      this.courseService$.getAll(1, null, result.name, result.category, result.minPrice, result.maxPrice, null)
        .subscribe(next => this.elaborateCourses = next.list);
    })
  }
}
