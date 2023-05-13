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
  constructor(private http: HttpClient) {
  }

  getFilms(): Observable<Film[]> {
    return this.http.get<Film[]>(this.apiUrl);
  }
}
