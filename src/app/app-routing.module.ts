import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import {DetailsPageComponent} from "./features/details/details-page/details-page.component";


const routes: Routes = [
  {
    path: 'films',
    loadChildren: () =>
      import('./features/films/films.module').then(
        (m) => m.FilmsModule
      )
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./features/auth/login/login.module').then(
        (m) => m.LoginModule
      )
  },
  {
    path: 'registration',
    loadChildren: () =>
      import('./features/auth/signin/signin.module').then(
        (m) => m.SigninModule
      )
  },
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
  {
    path: 'info/:category/:id',
    loadChildren: () =>
      import('./features/details/details.module').then(
        (m) => m.DetailsModule
      )
  },
  // {path:'info/:category/:id',component: DetailsPageComponent},
  {
    path: '**',
    loadChildren: () =>
      import('./features/films/films.module').then(
        (m) => m.FilmsModule
      )
  },
  {
    path: '',
    loadChildren: () =>
      import('./features/films/films.module').then(
        (m) => m.FilmsModule
      )
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
