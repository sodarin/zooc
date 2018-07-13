import { NgModule } from '@angular/core';
import { CourseComponent } from './course.component';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { CourseRoutingModule } from './course-routing.module';
import { HomeContentComponent } from './home-content/home-content.component';
import { TrialListComponent } from './trial-list/trial-list.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseItemComponent } from './course-item/course-item.component';
import { TrialItemComponent } from './trial-item/trial-item.component';
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
    TrialItemComponent,
    CourseItemComponent
  ],
  declarations: [CourseComponent, HomeContentComponent, TrialListComponent, CourseListComponent, CourseItemComponent, TrialItemComponent]
})
export class CourseModule { }
