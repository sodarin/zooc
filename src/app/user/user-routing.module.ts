import {NgModule} from "@angular/core";
import {RouterModule, Routes} from '@angular/router';
import {UserComponent} from './user.component';
import {ReserveComponent} from './reserve/reserve.component';
import {OrderComponent} from './order/order.component';
import {UserInfoComponent} from './user-info/user-info.component';
import {UserDetailComponent} from './user-detail/user-detail.component';

const routes: Routes = [
  {path: '', component: UserComponent, children: [
      {path: '', component: UserInfoComponent},
      {path: 'reserve', component: ReserveComponent},
      {path: 'order', component: OrderComponent},
      {path: 'detail', component: UserDetailComponent}
    ]
  },

  {path: '/user/reserve', component: ReserveComponent},
  {path: '/user/order', component: OrderComponent},
  {path: '/user/detail', component: UserDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule{}
