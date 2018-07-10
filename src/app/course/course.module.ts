import { NgModule } from '@angular/core';
import { CourseComponent } from './course.component';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { CourseRoutingModule } from './course-routing.module';
import { HomeContentComponent } from './home-content/home-content.component';
import { FreeTrialsComponent } from './free-trials/free-trials.component';
import { ElaborateCourseComponent } from './elaborate-course/elaborate-course.component';
import { ElaborateCourseItemComponent } from './elaborate-course-item/elaborate-course-item.component';
import { FreeTrialItemComponent } from './free-trial-item/free-trial-item.component';
import {FreeTrialService} from '../service/course/free-trial/free-trial.service';
import {ElaborateCourseService} from '../service/course/elaborate-course/elaborate-course.service';

@NgModule({
  imports: [
    SharedModule,
    CoreModule,
    CourseRoutingModule
  ],
  providers: [
    FreeTrialService,
    ElaborateCourseService
  ],
  exports: [
    FreeTrialItemComponent,
    ElaborateCourseItemComponent
  ],
  declarations: [CourseComponent, HomeContentComponent, FreeTrialsComponent, ElaborateCourseComponent, ElaborateCourseItemComponent, FreeTrialItemComponent]
})
export class CourseModule { }
