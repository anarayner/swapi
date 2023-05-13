import {Component, OnInit} from '@angular/core';
import {SwapiService} from "../../services/swapi.service";
import {Film} from "./store/films.interface";
import {Observable} from "rxjs";
import {selectFilms, selectFilmsLoaded, selectFilmsLoading, selectSelectedFilm} from "./store/ films.selectors";
import {Store} from "@ngrx/store";
import {loadFilms} from "./store/films.actions";

@Component({
  selector: 'app-film-page',
  template: `
    <div class="page-container">
      <mat-spinner *ngIf="isLoading" class="page-spinner"></mat-spinner>
      <app-card-list-template *ngIf="!isLoading" [cards]="films"></app-card-list-template>
    </div>
  `,
  styleUrls: ['../page.scss']
})
export class FilmPageComponent implements OnInit{

  films: Film[] = []
  isLoading: boolean = true;

  constructor(private store: Store, private swapiService: SwapiService) { }

  ngOnInit(): void {
     this.getAllFilms()
     //this.store.dispatch(loadFilms());
     console.log('NGRX', this.films$)
  }

  getAllFilms() {
    this.swapiService.getAll('films').subscribe((result) => {
      this.films = result;
      this.isLoading = false
    });
  }



  films$: Observable<Film[]> = this.store.select(selectFilms);
  //selectedFilm$: Observable<Film> = this.store.select(selectSelectedFilm);
  loading$: Observable<boolean> = this.store.select(selectFilmsLoading);
  loaded$: Observable<boolean> = this.store.select(selectFilmsLoaded);

}
