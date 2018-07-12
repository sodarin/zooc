import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FreeTrialService} from '../../service/course/free-trial/free-trial.service';
import {Trial} from '../../model/Trial';
import {ElaborateCourse} from '../../model/ElaborateCourse.model';
import {ElaborateCourseService} from '../../service/course/elaborate-course/elaborate-course.service';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css']
})
export class HomeContentComponent implements OnInit {

  freeTrials: Trial[];

  elaborateCourses: ElaborateCourse[];

  constructor(private route: Router, private freeTrailService: FreeTrialService, private elaborateCourseService: ElaborateCourseService) { }

  ngOnInit() {
    // TODO The enterprise ID is hard coded
    this.freeTrailService.getLatest(1, 3).subscribe(result => {
      this.freeTrials = result;
    });
    // TODO
    this.elaborateCourses = this.elaborateCourseService.getElaborateCourseTopThree();
  }

  turnToFreeTrialsPage() {
    this.route.navigateByUrl('/home/free-trials');
  }

  turnToElaborateCoursesPage() {
    this.route.navigateByUrl('/home/elaborate-courses');
  }

}
