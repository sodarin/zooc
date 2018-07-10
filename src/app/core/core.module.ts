import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import {LoginService} from '../service/login/login.service';

@NgModule({
  imports: [
    SharedModule,
    RouterModule,
    NgZorroAntdModule
  ],
  exports: [
    HeaderComponent,
    CarouselComponent,
    NavbarComponent
  ],
  providers: [
    LoginService
  ],
  declarations: [HeaderComponent, CarouselComponent, NavbarComponent]
})
export class CoreModule { }
