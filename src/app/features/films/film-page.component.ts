import {Component, OnInit} from '@angular/core';
import {
  selectFilms,
  selectFilmsLoaded,
  selectFilmsLoading,
  selectSelectedFilm
} from "./store/films.selectors";
import {Store} from "@ngrx/store";
import {loadFilms} from "./store/films.actions";

@Component({
  selector: 'app-film-page',
  template: `
    <div class="page-container">
      <mat-spinner *ngIf="filmsLoading$ | async" class="page-spinner"></mat-spinner>
      <app-card-list *ngIf="filmsLoaded$ | async" [cards]="films$ | async"></app-card-list>
    </div>
  `,
  styleUrls: ['../page.scss']
})
export class FilmPageComponent implements OnInit{

  constructor(private store: Store) { }

  ngOnInit(): void {
     this.store.dispatch(loadFilms());
  }


  films$ = this.store.select(selectFilms);
  filmsLoading$ = this.store.select(selectFilmsLoading);
  filmsLoaded$ = this.store.select(selectFilmsLoaded);
  selectedFilm$ = this.store.select(selectSelectedFilm);

}
