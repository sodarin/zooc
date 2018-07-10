import {Component, Input, OnInit} from '@angular/core';
import {ElaborateCourse} from '../../model/ElaborateCourse.model';
import {ElaborateCourseService} from '../../service/course/elaborate-course/elaborate-course.service';
import {OrderEnum} from '../../model/enum/OrderEnum';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  @Input() item;

  elaborateCourse: ElaborateCourse;

  constructor(private elaborateCourseService: ElaborateCourseService) { }

  ngOnInit() {
    this.elaborateCourse = this.elaborateCourseService.getElaborateCoursesById(this.item.courseId);
  }

}
