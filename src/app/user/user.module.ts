import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import {LoginService} from '../service/login/login.service';
import { ReserveComponent } from './reserve/reserve.component';
import { ReserveItemComponent } from './reserve-item/reserve-item.component';
import {ReserveService} from '../service/reserve/reserve.service';
import { OrderComponent } from './order/order.component';
import { OrderItemComponent } from './order-item/order-item.component';
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
    OrderService,
  ],
  declarations: [ UserComponent, ReserveComponent, ReserveItemComponent, OrderComponent, OrderItemComponent]
})
export class UserModule { }
