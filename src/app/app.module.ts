import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module';
import { CoreModule } from './core/core.module';
import { CourseModule } from './course/course.module';
import { EnterpriseModule } from './enterprise/enterprise.module';
import { UserModule } from './user/user.module';
import { RegisterModule } from './register/register.module';
import { MatIconRegistry } from '@angular/material';
import { loadSvgResources } from './util/svg.util';
import { DatePipe } from './pipe/date.pipe';
import { ClickOutsideModule } from 'ng-click-outside';
import {LoginService} from './service/login/login.service';
import {OrderService} from './service/order/order.service';
import {ReserveService} from './service/reserve/reserve.service';
import {MomentService} from './service/moment/moment.service';
import {BranchService} from './service/branch/branch.service';
import {TrialService} from './service/trial/trial.service';
import {DateFormatService} from './service/date-format/date-format.service';
import {LecturerService} from './service/lecturer/lecturer.service';
import {CourseService} from './service/course/course.service';
import {EnterpriseService} from './service/enterprise/enterprise.service';

@NgModule({
  declarations: [
    AppComponent,
    DatePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    CourseModule,
    ClickOutsideModule
  ],
  providers: [
    LoginService,
    ReserveService,
    OrderService,
    EnterpriseService,
    LecturerService,
    MomentService,
    BranchService,
    DateFormatService,
    TrialService,
    CourseService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ir: MatIconRegistry, ds: DomSanitizer) {
    loadSvgResources(ir, ds);
  }
}
