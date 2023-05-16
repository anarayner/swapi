import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginPageComponent} from "./login-page.component";
import {SharedModule} from "../../../shared/shared.module";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    LoginPageComponent,
  ],
  exports: [
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([{ path: '', component: LoginPageComponent }])
  ]
})
export class LoginModule { }
