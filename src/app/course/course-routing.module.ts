import {NgModule} from "@angular/core";
import {RouterModule, Routes} from '@angular/router';
import {CourseComponent} from "./course.component";
import {HomeContentComponent} from './home-content/home-content.component';
import {TrialListComponent} from './trial-list/trial-list.component';
import {CourseListComponent} from './course-list/course-list.component';

const routes: Routes = [
  {path: 'home', component: CourseComponent, children: [
      {path: '', component: HomeContentComponent},
      {path: 'trials', component: TrialListComponent},
      {path: 'courses', component: CourseListComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule {}
