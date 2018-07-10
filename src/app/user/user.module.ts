import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import {LoginService} from '../service/login/login.service';
import { ReserveComponent } from './reserve/reserve.component';
import { ReserveListComponent } from './reserve-list/reserve-list.component';
import {ReserveService} from '../service/reserve/reserve.service';
import { OrderComponent } from './order/order.component';
import { OrderListComponent } from './order-list/order-list.component';
import {OrderService} from '../service/order/order.service';

@NgModule({
  imports: [
    SharedModule,
    CoreModule,
    UserRoutingModule,
  ],
  providers: [
    LoginService,
    ReserveService,
    OrderService
  ],
  declarations: [ UserComponent, ReserveComponent, ReserveListComponent, OrderComponent, OrderListComponent]
})
export class UserModule { }
