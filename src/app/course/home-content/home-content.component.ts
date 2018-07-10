import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FreeTrialService} from '../../service/course/free-trial/free-trial.service';
import {FreeTrial} from '../../model/FreeTrialModel';
import {ElaborateCourse} from '../../model/ElaborateCourse.model';
import {ElaborateCourseService} from '../../service/course/elaborate-course/elaborate-course.service';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css']
})
export class HomeContentComponent implements OnInit {

  freeTrials: FreeTrial[];

  elaborateCourses: ElaborateCourse[];

  constructor(private route: Router, private freeTrailService: FreeTrialService, private elaborateCourseService: ElaborateCourseService) { }

  ngOnInit() {
    this.freeTrials = this.freeTrailService.getFreeTrialsTopThree();
    this.elaborateCourses = this.elaborateCourseService.getElaborateCourseTopThree();
  }

  turnToFreeTrialsPage() {
    this.route.navigateByUrl('/home/free-trials');
  }

  turnToElaborateCoursesPage() {
    this.route.navigateByUrl('/home/elaborate-courses');
  }

}
