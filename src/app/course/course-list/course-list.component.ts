import { Component, OnInit } from '@angular/core';
import { Course } from '../../model/Course';
import { CourseService } from '../../service/course/course.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SearchPageComponent} from '../search-page/search-page.component';
import {MatBottomSheet} from '@angular/material';
declare var MeScroll: any;

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

  elaborateCourses: Course[] = [];
  public mescroll;

  targetPage: number = 1;
  totalSize: number;
  currentPageSize: number;

  constructor(private router: Router,
              private routeInfo: ActivatedRoute,
              private courseService$: CourseService,
              private bottomSheet: MatBottomSheet) { }

  ngOnInit() {
    // TODO The enterprise ID is hard coded
    this.initMeScroll();
  }

  initMeScroll() {
    this.mescroll = new MeScroll("mescroll", {
      down: {
        use: true,
        auto: false,
        page: {
          num: 0,
          size: 5
        },
        callback: this.refresh
      },
      up: {
        use: true,
        auto: true,
        page: {
          num: 0,
          size: 5
        },
        callback: this.loadMore
      }
    });
  }

  loadFiveCourses(targetPage: number) {
    this.courseService$.getCoursesWithPagination(1, true, targetPage, 5).subscribe(result => {
      if (targetPage == 1) {
        this.elaborateCourses = [];
      }
      this.totalSize = result.total;
      this.currentPageSize = result.list.length;
      this.elaborateCourses.push(...result.list);
      this.mescroll.endBySize(this.currentPageSize, this.totalSize);
      this.targetPage++;
    }, error2 => {
      this.mescroll.endErr();
    });
  }

  //需要全局作用域的this，所以使用箭头函数
  refresh = () => {
    this.targetPage = 1;
    this.mescroll.resetUpScroll(true);
  };

  loadMore = () => {
    this.loadFiveCourses(this.targetPage);
  };

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
