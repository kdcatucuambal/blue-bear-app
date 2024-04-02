import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginPage} from "./login/login.page";
import {SignupPage} from "./signup/signup.page";
import {VerifyCodePage} from "./verify-code/verify-code.page";



const routes: Routes = [
  {
    path: 'auth',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginPage
  },
  {
    path: 'signup',
    component: SignupPage
  },
  {
    path: 'verify-code/:user',
    component: VerifyCodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
