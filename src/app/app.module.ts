import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SharedModule} from "./shared/shared.module";
import {AppRoutingModule} from "./app-routing.module";
import {FeaturesModule} from "./features/features.module";
import { StoreModule } from '@ngrx/store';
import {CommonModule} from "@angular/common";
import {FilmsEffects} from "./features/films/store/films.effects";
import {EffectsModule} from "@ngrx/effects";
import {filmsReducer} from "./features/films/store/films.reducer";
import {peopleReducer} from "./features/people/store/people.reducer";
import {PeopleEffects} from "./features/people/store/people.effects";
import {detailsReducer} from "./features/details/store/details.reducer";
import {DetailsPageEffects} from "./features/details/store/details.effects";
import {AuthorizationModule} from "./auth/authorization.module";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    FeaturesModule,
    CommonModule,
    AuthorizationModule,
    EffectsModule.forRoot([FilmsEffects, PeopleEffects, DetailsPageEffects]),
    StoreModule.forRoot({films: filmsReducer, people: peopleReducer, details: detailsReducer})
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
