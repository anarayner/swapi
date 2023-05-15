import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DetailsPageComponent} from "./details-page/details-page.component";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {SharedModule} from "../../shared/shared.module";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";



@NgModule({
  declarations: [
    DetailsPageComponent,

  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    SharedModule,
    MatProgressSpinnerModule,
  ]
})
export class DetailsModule { }
