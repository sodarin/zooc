import {NgModule} from "@angular/core";
import {RouterModule, Routes} from '@angular/router';
import {CourseComponent} from "./course.component";
import {HomeContentComponent} from './home-content/home-content.component';
import {FreeTrialsComponent} from './free-trials/free-trials.component';
import {ElaborateCourseComponent} from './elaborate-course/elaborate-course.component';

const routes: Routes = [
  {path: 'home', component: CourseComponent, children: [
      {path: '', component: HomeContentComponent},
      {path: 'free-trials', component: FreeTrialsComponent},
      {path: 'elaborate-courses', component: ElaborateCourseComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule {}
