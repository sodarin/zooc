import {Component, Input, OnInit} from '@angular/core';
import {Course} from '../../model/Course';
import {ElaborateCourseService} from '../../service/course/elaborate-course/elaborate-course.service';
import {OrderEnum} from '../../model/enum/OrderEnum';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css']
})
export class OrderItemComponent implements OnInit {

  @Input() item;

  elaborateCourse: Course;

  constructor(private elaborateCourseService: ElaborateCourseService) { }

  ngOnInit() {
    // this.elaborateCourse = this.elaborateCourseService.getElaborateCoursesById(this.item.courseId);
  }

}
