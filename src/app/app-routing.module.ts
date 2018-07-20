import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'user', loadChildren: './user/user.module#UserModule'},
  {path: 'enterprise', loadChildren: './enterprise/enterprise.module#EnterpriseModule'},
  {path: 'register', loadChildren: './register/register.module#RegisterModule'},
  {path: 'login', loadChildren: './login/login.module#LoginModule'},
  // { path: 'login', redirectTo: '/login', pathMatch: 'full' },
  // { path: 'user', redirectTo: '/user', pathMatch: 'full' },
  // { path: 'register', redirectTo: 'register', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
