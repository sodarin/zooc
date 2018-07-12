import { NgModule } from '@angular/core';
import { CourseComponent } from './course.component';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { CourseRoutingModule } from './course-routing.module';
import { HomeContentComponent } from './home-content/home-content.component';
import { FreeTrialListComponent } from './free-trial-list/free-trial-list.component';
import { ElaborateCourseListComponent } from './elaborate-course-list/elaborate-course-list.component';
import { ElaborateCourseItemComponent } from './elaborate-course-item/elaborate-course-item.component';
import { FreeTrialItemComponent } from './free-trial-item/free-trial-item.component';
import {TrialService} from '../service/trial/trial.service';
import {CourseService} from '../service/course/course.service';

@NgModule({
  imports: [
    SharedModule,
    CoreModule,
    CourseRoutingModule
  ],
  providers: [
    TrialService,
    CourseService
  ],
  exports: [
    FreeTrialItemComponent,
    ElaborateCourseItemComponent
  ],
  declarations: [CourseComponent, HomeContentComponent, FreeTrialListComponent, ElaborateCourseListComponent, ElaborateCourseItemComponent, FreeTrialItemComponent]
})
export class CourseModule { }
