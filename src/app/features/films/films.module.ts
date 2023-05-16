import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FilmPageComponent} from "./film-page.component";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {RouterModule} from "@angular/router";
import {SharedModule} from "../../shared/shared.module";



@NgModule({
  declarations: [
    FilmPageComponent,
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    RouterModule.forChild([{path: '', component: FilmPageComponent}]),
    SharedModule
  ]
})
export class FilmsModule { }
