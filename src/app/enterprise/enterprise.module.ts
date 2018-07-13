import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { EnterpriseHomeComponent } from './enterprise-home/enterprise-home.component';
import { EnterpriseRoutingModule } from './enterprise-routing.module';
import { EnterpriseItemDeprecatedComponent } from './enterprise-item-deprecated/enterprise-item-deprecated.component';
import {EnterpriseService} from '../service/enterprise/enterprise.service';
import { LecturerListComponent } from './enterprise-home/lecturer-list/lecturer-list.component';
import { BranchListComponent } from './enterprise-home/branch-list/branch-list.component';
import { CourseListDeprecatedComponent } from './enterprise-home/course-list-deprecated/course-list-deprecated.component';
import { EnterpriseMomentComponent } from './enterprise-home/enterprise-moment/enterprise-moment.component';
import { BasicInfoComponent } from './enterprise-home/basic-info/basic-info.component';
import {LecturerService} from '../service/lecturer/lecturer.service';
import { LecturerItemComponent } from './enterprise-home/lecturer-list/lecturer-item/lecturer-item.component';
import { BranchItemComponent } from './enterprise-home/branch-list/branch-item/branch-item.component';
import { CourseModule } from '../course/course.module';
import { EnterpriseMomentItemComponent } from './enterprise-home/enterprise-moment/enterprise-moment-item/enterprise-moment-item.component';
import {MomentService} from '../service/moment/moment.service';
import {BranchService} from '../service/branch/branch.service';
import {CourseService} from '../service/course/course.service';
import {TrialService} from '../service/trial/trial.service';
import { EnterpriseMomentCommentItemComponent } from './enterprise-home/enterprise-moment/enterprise-moment-comment-item/enterprise-moment-comment-item.component';
import {LoginService} from '../service/login/login.service';
import { EnterpriseFullMomentCommentComponent } from './enterprise-home/enterprise-moment/enterprise-full-moment-comment/enterprise-full-moment-comment.component';
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
    BranchService,
    CourseService,
    TrialService,
    LoginService,
    DateFormatService
  ],
  entryComponents: [
    EnterpriseFullMomentCommentComponent
  ],
  declarations: [EnterpriseHomeComponent, EnterpriseItemDeprecatedComponent, LecturerListComponent, BranchListComponent, CourseListDeprecatedComponent, EnterpriseMomentComponent, BasicInfoComponent, LecturerItemComponent, BranchItemComponent, EnterpriseMomentItemComponent, EnterpriseMomentCommentItemComponent, EnterpriseFullMomentCommentComponent]
})
export class EnterpriseModule { }
