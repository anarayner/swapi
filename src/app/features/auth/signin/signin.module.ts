import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../../../shared/shared.module";
import {SinginPageComponent} from "./singin-page.component";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    SinginPageComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([{ path: '', component: SinginPageComponent }])
  ]
})
export class SigninModule { }
