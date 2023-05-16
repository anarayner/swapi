import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {FilmPageComponent} from "./films/film-page.component";
import {SharedModule} from "../shared/shared.module";
import {MatPaginatorModule} from "@angular/material/paginator";
import {RouterLink} from "@angular/router";
import {MatIconModule} from "@angular/material/icon";
import {AuthModule} from "./auth/auth.module";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DetailsModule} from "./details/details.module";


@NgModule({
  declarations: [
    FilmPageComponent,
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    SharedModule,
    MatPaginatorModule,
    RouterLink,
    MatIconModule,
    AuthModule,
    MatInputModule,
    // DetailsModule,
    // FormsModule,
    // ReactiveFormsModule,
  ],
  exports: [
  ]
})
export class FeaturesModule { }
