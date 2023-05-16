import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FilmPageComponent} from "./features/films/film-page.component";
import {LoginPageComponent} from "./features/auth/login-page.component";
import {SinginPageComponent} from "./features/auth/singin-page.component";
import {DetailsPageComponent} from "./features/details/details-page/details-page.component";


const routes: Routes = [
  {path:'films',component: FilmPageComponent},
  {path: 'login',component: LoginPageComponent},
  {path: 'registration',component: SinginPageComponent},
  {
    path: 'people',
    loadChildren: () =>
      import('./features/people/people.module').then(
        (m) => m.PeopleModule
      )
  },
  {
    path: 'user/:id',
    loadChildren: () =>
      import('./features/user-profile/user-profile.module').then(
        (m) => m.UserProfileModule
      )
  },
  {path:'info/:category/:id',component: DetailsPageComponent},
  {path:'**',component: FilmPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
