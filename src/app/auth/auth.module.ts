import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthRoutingModule} from "./auth-routing.module";
import {SharedModule} from "../shared/shared.module";
import {LoginPage} from "./login/login.page";
import {SignupPage} from "./signup/signup.page";
import {VerifyCodePage} from "./verify-code/verify-code.page";
import {IonicModule} from "@ionic/angular";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    LoginPage,
    SignupPage,
    VerifyCodePage
  ],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    AuthRoutingModule,
    SharedModule
  ]
})
export class AuthModule { }
