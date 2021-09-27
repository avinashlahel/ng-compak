import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {UnauthorizedComponent} from "../unauthorized/unauthorized.component";
import {LoginComponent} from "../login/login.component";
import {PolicyDetailsComponent} from "../policy-details/policy-details.component";
import {LoginGuard} from "../login.guard";

const routes: Routes = [
  { path:  '', redirectTo:  'login', pathMatch:  'full' },
  {
    path: 'login',
    component: LoginComponent,
    canActivate : [LoginGuard]
  },
  {
    path: 'policy-info',
    component: PolicyDetailsComponent
  },
  {
    path: 'unauthorized',
    component: UnauthorizedComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
