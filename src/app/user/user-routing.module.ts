import {NgModule} from "@angular/core";
import {RouterModule, Routes} from '@angular/router';
import {UserComponent} from './user.component';
import {ReserveComponent} from './reserve/reserve.component';
import {OrderComponent} from './order/order.component';

const routes: Routes = [
  {path: 'user', component: UserComponent},
  {path: 'user/reserve', component: ReserveComponent},
  {path: 'user/order', component: OrderComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule{}
