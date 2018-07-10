import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { EnterpriseInfoComponent } from './enterprise-info/enterprise-info.component';
import { EnterpriseRoutingModule } from './enterprise-routing.module';
import { EnterpriseHomeComponent } from './enterprise-home/enterprise-home.component';
import { EnterpriseItemComponent } from './enterprise-item/enterprise-item.component';
import {EnterpriseService} from '../service/enterprise/enterprise.service';
import { EnterpriseFacultyComponent } from './enterprise-info/enterprise-faculty/enterprise-faculty.component';
import { EnterpriseDepartmentComponent } from './enterprise-info/enterprise-department/enterprise-department.component';
import { EnterpriseCoursesComponent } from './enterprise-info/enterprise-courses/enterprise-courses.component';
import { EnterpriseMomentComponent } from './enterprise-info/enterprise-moment/enterprise-moment.component';
import { EnterpriseDetailComponent } from './enterprise-info/enterprise-detail/enterprise-detail.component';
import {LecturerService} from '../service/lecturer/lecturer.service';
import { EnterpriseFacultyItemComponent } from './enterprise-info/enterprise-faculty/enterprise-faculty-item/enterprise-faculty-item.component';
import { EnterpriseDepartmentItemComponent } from './enterprise-info/enterprise-department/enterprise-department-item/enterprise-department-item.component';
import { CourseModule } from '../course/course.module';
import { EnterpriseMomentItemComponent } from './enterprise-info/enterprise-moment/enterprise-moment-item/enterprise-moment-item.component';
import {MomentService} from '../service/moment/moment.service';
import {DepartmentService} from '../service/department/department.service';
import {ElaborateCourseService} from '../service/course/elaborate-course/elaborate-course.service';
import {FreeTrialService} from '../service/course/free-trial/free-trial.service';
import { EnterpriseMomentCommentItemComponent } from './enterprise-info/enterprise-moment/enterprise-moment-comment-item/enterprise-moment-comment-item.component';
import {LoginService} from '../service/login/login.service';
import { EnterpriseFullMomentCommentComponent } from './enterprise-info/enterprise-moment/enterprise-full-moment-comment/enterprise-full-moment-comment.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DateFormatService} from '../service/date-format/date-format.service';

@NgModule({
  imports: [
    CoreModule,
    SharedModule,
    EnterpriseRoutingModule,
    CourseModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    EnterpriseService,
    LecturerService,
    MomentService,
    DepartmentService,
    ElaborateCourseService,
    FreeTrialService,
    LoginService,
    DateFormatService
  ],
  entryComponents: [
    EnterpriseFullMomentCommentComponent
  ],
  declarations: [EnterpriseInfoComponent, EnterpriseHomeComponent, EnterpriseItemComponent, EnterpriseFacultyComponent, EnterpriseDepartmentComponent, EnterpriseCoursesComponent, EnterpriseMomentComponent, EnterpriseDetailComponent, EnterpriseFacultyItemComponent, EnterpriseDepartmentItemComponent, EnterpriseMomentItemComponent, EnterpriseMomentCommentItemComponent, EnterpriseFullMomentCommentComponent]
})
export class EnterpriseModule { }
