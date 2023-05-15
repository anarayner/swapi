import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeoplePageComponent } from './people/people-page.component';
import { ProfilePageComponent } from './user-profile/profile-page/profile-page.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {FilmPageComponent} from "./films/film-page.component";
// import {DetailsPageComponent} from "./details/details-page/details-page.component";
// import {MatButtonModule} from "@angular/material/button";
import {SharedModule} from "../shared/shared.module";
import {MatPaginatorModule} from "@angular/material/paginator";
import {RouterLink} from "@angular/router";
// import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {AuthModule} from "./auth/auth.module";
// import { SearchComponent } from './search/search.component';
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DetailsModule} from "./details/details.module";


@NgModule({
  declarations: [
    PeoplePageComponent,
    ProfilePageComponent,
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
    DetailsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
  ]
})
export class FeaturesModule { }
