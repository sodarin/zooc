import { Component, OnInit } from '@angular/core';
import {CourseService} from '../../../service/course/course.service';
import {TrialService} from '../../../service/trial/trial.service';
import {Course} from '../../../model/Course';
import {Trial} from '../../../model/Trial';

@Component({
  selector: 'app-enterprise-courses',
  templateUrl: './enterprise-courses.component.html',
  styleUrls: ['./enterprise-courses.component.css']
})
export class EnterpriseCoursesComponent implements OnInit {

  elaborateCourses: Course[];
  freeTrials: Trial[];

  constructor(private elaborateCourseService$: CourseService, private freeTrialService$: TrialService) { }

  ngOnInit() {
    this.elaborateCourseService$.getAll(1).subscribe(result => {
      this.elaborateCourses = result;
    });
    // this.freeTrials = this.freeTrialService$.getFreeTrials()
  }

}
