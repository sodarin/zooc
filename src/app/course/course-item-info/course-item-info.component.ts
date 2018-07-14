import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../../service/course/course.service';
import { Course } from '../../model/Course';
import { CourseOffering } from '../../model/CourseOffering';
import { Branch } from '../../model/Branch';
import { CourseOfferingService } from '../../service/course-offering/course-offering.service';
import { BranchService } from '../../service/branch/branch.service';

@Component({
  selector: 'app-course-item-info',
  templateUrl: './course-item-info.component.html',
  styleUrls: ['./course-item-info.component.css']
})
export class CourseItemInfoComponent implements OnInit {
  item: Course;
  offerings: CourseOffering[];
  branches: { [key: number]: Branch } = { };

  constructor(private routeInfo: ActivatedRoute,
              private courseService$: CourseService,
              private courseOfferingService$: CourseOfferingService,
              private branchService$: BranchService) { }

  ngOnInit() {
    // Get the information of the course and its offerings
    this.courseService$.getDetailById(this.routeInfo.snapshot.params['id']).subscribe(course => {
      this.item = course;
      this.courseOfferingService$.getAll(this.item.courseId).subscribe(listResultOfOfferings => {
        this.offerings = listResultOfOfferings.list;
      });
    });
  }

  getBranchDetailIfNotDone(branchId: number) {
    if (this.branches[branchId]) {
      return;
    }
    this.branchService$.getId(branchId).subscribe(branch => {
      this.branches[branchId] = branch;
    });
  }

}
