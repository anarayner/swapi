import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FilmPageComponent} from "./film-page.component";
import {SharedModule} from "../../shared/shared.module";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    FilmPageComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatProgressSpinnerModule,
    RouterModule.forChild([{ path: '', component: FilmPageComponent }])
  ]
})
export class FilmsModule { }
