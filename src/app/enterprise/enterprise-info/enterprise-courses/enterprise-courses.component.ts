import { Component, OnInit } from '@angular/core';
import {ElaborateCourseService} from '../../../service/course/elaborate-course/elaborate-course.service';
import {FreeTrialService} from '../../../service/course/free-trial/free-trial.service';
import {ElaborateCourse} from '../../../model/ElaborateCourse.model';
import {FreeTrial} from '../../../model/FreeTrialModel';

@Component({
  selector: 'app-enterprise-courses',
  templateUrl: './enterprise-courses.component.html',
  styleUrls: ['./enterprise-courses.component.css']
})
export class EnterpriseCoursesComponent implements OnInit {

  elaborateCourses: ElaborateCourse[];
  freeTrials: FreeTrial[];

  constructor(private elaborateCourseService$: ElaborateCourseService, private freeTrialService$: FreeTrialService) { }

  ngOnInit() {
    this.elaborateCourses = this.elaborateCourseService$.getElaborateCourse();
    this.freeTrials = this.freeTrialService$.getFreeTrials()
  }

}
