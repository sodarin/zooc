import {NgModule} from "@angular/core";
import {RouterModule, Routes} from '@angular/router';
import {EnterpriseHomeComponent} from './enterprise-home/enterprise-home.component';
import {BasicInfoComponent} from './enterprise-home/basic-info/basic-info.component';
import {LecturerListComponent} from './enterprise-home/lecturer-list/lecturer-list.component';
import {BranchListComponent} from './enterprise-home/branch-list/branch-list.component';
import {CourseListDeprecatedComponent} from './enterprise-home/course-list-deprecated/course-list-deprecated.component';
import {EnterpriseMomentComponent} from './enterprise-home/enterprise-moment/enterprise-moment.component';

const routes: Routes = [
  // {path: 'enterprise', component: EnterpriseHomeDeprecatedComponent},
  {path: 'enterprise', component: EnterpriseHomeComponent, children: [
      {path: '', component: BasicInfoComponent},
      {path: 'lecturers', component: LecturerListComponent},
      {path: 'branches', component: BranchListComponent},
      {path: 'courses', component: CourseListDeprecatedComponent},
      {path: 'moments', component: EnterpriseMomentComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnterpriseRoutingModule{}
