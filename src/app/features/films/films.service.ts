import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Film} from "./store/films.interface";
import {environment} from "../../../environment";

@Injectable({
  providedIn: 'root'
})
export class FilmsService {
  private apiUrl = `${environment.swapiUrl}/films`
  private cache = new Map<string, any>();

  constructor(private http: HttpClient) {
  }

  getFilms(): Observable<Film[]> {
    if (this.cache.has(this.apiUrl)) {
      return this.cache.get(this.apiUrl);
    } else {
      const films$ = this.http.get<Film[]>(this.apiUrl);
      this.cache.set(this.apiUrl, films$);
      return films$;
    }
  }
}
