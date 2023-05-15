import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FilmPageComponent} from "./features/films/film-page.component";
import {PeoplePageComponent} from "./features/people/people-page.component";
import {LoginPageComponent} from "./features/auth/login-page.component";
import {SinginPageComponent} from "./features/auth/singin-page.component";
import {ProfilePageComponent} from "./features/user-profile/profile-page/profile-page.component";
import {DetailsPageComponent} from "./features/details/details-page/details-page.component";


const routes: Routes = [
  {path:'films',component: FilmPageComponent},
  {path: 'login',component: LoginPageComponent},
  {path: 'registration',component: SinginPageComponent},
  {path: 'people', component: PeoplePageComponent },
  {path:'user/:id',component: ProfilePageComponent},
  {path:'info/:category/:id',component: DetailsPageComponent},
  {path:'**',component: FilmPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
