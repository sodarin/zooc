import { Component, Input, OnInit } from '@angular/core';
import { Course } from '../../model/Course';
import { CourseService } from '../../service/course/course.service';
import { OrderStatusEnum } from '../../model/enum/OrderStatusEnum';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css']
})
export class OrderItemComponent implements OnInit {

  @Input() item;

  elaborateCourse: Course;

  constructor(private elaborateCourseService: CourseService) { }

  ngOnInit() {
    // this.elaborateCourse = this.elaborateCourseService.getElaborateCoursesById(this.item.courseId);
  }

}
