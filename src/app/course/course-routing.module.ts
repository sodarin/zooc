import {NgModule} from "@angular/core";
import {RouterModule, Routes} from '@angular/router';
import {CourseComponent} from "./course.component";
import {HomeContentComponent} from './home-content/home-content.component';
import {FreeTrialListComponent} from './free-trial-list/free-trial-list.component';
import {ElaborateCourseListComponent} from './elaborate-course-list/elaborate-course-list.component';

const routes: Routes = [
  {path: 'home', component: CourseComponent, children: [
      {path: '', component: HomeContentComponent},
      {path: 'free-trials', component: FreeTrialListComponent},
      {path: 'elaborate-courses', component: ElaborateCourseListComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule {}
