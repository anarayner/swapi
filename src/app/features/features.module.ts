import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeoplePageComponent } from './people/people-page.component';
import { ProfilePageComponent } from './user-profile/profile-page/profile-page.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {TemplatesModule} from "../templates/templates.module";
import {FilmPageComponent} from "./films/film-page.component";
import {DetailsPageComponent} from "./details/details-page/details-page.component";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    PeoplePageComponent,
    ProfilePageComponent,
    FilmPageComponent,
    DetailsPageComponent
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    TemplatesModule,
    MatButtonModule
  ],
  exports: [
    PeoplePageComponent,
    FilmPageComponent,
  ]
})
export class FeaturesModule { }
