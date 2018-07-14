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
import { TrialItemInfoComponent } from './trial-item-info/trial-item-info.component';
import { NgxAmapModule } from 'ngx-amap';
import { CourseItemInfoComponent } from './course-item-info/course-item-info.component';
import { ReservationMessageComponent } from './trial-item-info/reservation-message/reservation-message.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PurchaseConfirmationDialogComponent } from './course-item-info/purchase-confirmation-dialog/purchase-confirmation-dialog.component';


@NgModule({
  imports: [
    SharedModule,
    CoreModule,
    CourseRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxAmapModule.forRoot({
      apiKey: '5063258ea73f5e445d4e4203b4885fe0'
    })
  ],
  providers: [
    TrialService,
    CourseService
  ],
  exports: [
    TrialItemComponent,
    CourseItemComponent
  ],
  entryComponents: [
    ReservationMessageComponent,
    PurchaseConfirmationDialogComponent
  ],
  declarations: [
    CourseComponent, HomeContentComponent,
    TrialListComponent, TrialItemComponent, TrialItemInfoComponent,
    CourseListComponent, CourseItemComponent, CourseItemInfoComponent, ReservationMessageComponent, PurchaseConfirmationDialogComponent
  ]
})
export class CourseModule { }
