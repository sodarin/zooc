import {NgModule} from "@angular/core";
import {RouterModule, Routes} from '@angular/router';
import {EnterpriseInfoComponent} from './enterprise-info/enterprise-info.component';
import {EnterpriseHomeComponent} from './enterprise-home/enterprise-home.component';
import {EnterpriseDetailComponent} from './enterprise-info/enterprise-detail/enterprise-detail.component';
import {EnterpriseFacultyComponent} from './enterprise-info/enterprise-faculty/enterprise-faculty.component';
import {EnterpriseDepartmentComponent} from './enterprise-info/enterprise-department/enterprise-department.component';
import {EnterpriseCoursesComponent} from './enterprise-info/enterprise-courses/enterprise-courses.component';
import {EnterpriseMomentComponent} from './enterprise-info/enterprise-moment/enterprise-moment.component';

const routes: Routes = [
  {path: 'enterprise', component: EnterpriseHomeComponent},
  {path: 'enterprise/:id', component: EnterpriseInfoComponent, children: [
      {path: '', component: EnterpriseDetailComponent},
      {path: 'faculty', component: EnterpriseFacultyComponent},
      {path: 'department', component: EnterpriseDepartmentComponent},
      {path: 'courses', component: EnterpriseCoursesComponent},
      {path: 'moment', component: EnterpriseMomentComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnterpriseRoutingModule{}
