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
import { RefundReasonComponent } from './order-item/refund-reason/refund-reason.component';
import {UserInfoComponent} from './user-info/user-info.component';
import { UserDetailComponent } from './user-detail/user-detail.component';


@NgModule({
  imports: [
    SharedModule,
    CoreModule,
    UserRoutingModule,
  ],
  providers: [],
  declarations: [ UserComponent, ReserveComponent, ReserveItemComponent, OrderComponent, OrderItemComponent, RefundReasonComponent, UserInfoComponent, UserDetailComponent]
})
export class UserModule { }
