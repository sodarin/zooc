import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import {LoginService} from '../service/login/login.service';
import { ZzzzAvatarComponent } from './zzzz-avatar/zzzz-avatar.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule,
    NgZorroAntdModule
  ],
  exports: [
    HeaderComponent,
    CarouselComponent,
    NavbarComponent,
    ZzzzAvatarComponent
  ],
  providers: [

  ],
  declarations: [HeaderComponent, CarouselComponent, NavbarComponent, ZzzzAvatarComponent]
})
export class CoreModule { }
