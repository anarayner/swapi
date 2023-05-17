import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProfilePageComponent} from "./profile-page/profile-page.component";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {RouterModule} from "@angular/router";
import {MatCardModule} from "@angular/material/card";
import {SharedModule} from "../../shared/shared.module";



@NgModule({
  declarations: [
    ProfilePageComponent
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    RouterModule.forChild([{path: '', component: ProfilePageComponent}]),
    MatCardModule,
    SharedModule
  ]
})
export class UserProfileModule { }
