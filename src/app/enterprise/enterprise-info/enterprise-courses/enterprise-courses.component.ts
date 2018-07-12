import { Component, OnInit } from '@angular/core';
import {ElaborateCourseService} from '../../../service/course/elaborate-course/elaborate-course.service';
import {FreeTrialService} from '../../../service/course/free-trial/free-trial.service';
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

  constructor(private elaborateCourseService$: ElaborateCourseService, private freeTrialService$: FreeTrialService) { }

  ngOnInit() {
    this.elaborateCourseService$.getAll(1).subscribe(result => {
      this.elaborateCourses = result;
    });
    // this.freeTrials = this.freeTrialService$.getFreeTrials()
  }

}
