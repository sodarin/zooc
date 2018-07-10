import {RouterModule, Routes} from '@angular/router';
import {NgModule} from "@angular/core";

const routes: Routes = [
  {path: '', redirectTo:'/home', pathMatch: 'full'},
  {path: 'login', redirectTo: '/login', pathMatch: 'full'},
  {path: 'enterprise', redirectTo: '/enterprise', pathMatch: 'full'},
  {path: 'user', redirectTo: '/user', pathMatch: 'full'},
  {path: 'register', redirectTo: 'register', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
