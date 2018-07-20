import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { EnterpriseHomeComponent } from './enterprise-home/enterprise-home.component';
import { BasicInfoComponent } from './enterprise-home/basic-info/basic-info.component';
import { LecturerListComponent } from './enterprise-home/lecturer-list/lecturer-list.component';
import { BranchListComponent } from './enterprise-home/branch-list/branch-list.component';
import { EnterpriseMomentComponent } from './enterprise-home/enterprise-moment/enterprise-moment.component';
import { BranchItemInfoComponent } from './enterprise-home/branch-list/branch-item-info/branch-item-info.component';

const routes: Routes = [
  // {path: 'enterprise', component: EnterpriseHomeDeprecatedComponent},
  {path: '', component: EnterpriseHomeComponent, children: [
      {path: '', redirectTo: 'info', pathMatch: 'full'},
      {path: 'info', component: BasicInfoComponent},
      {path: 'lecturers', component: LecturerListComponent},
      {path: 'branches', component: BranchListComponent},
      {path: 'moments', component: EnterpriseMomentComponent},
      {path: 'branches/:id', component: BranchItemInfoComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnterpriseRoutingModule {}
