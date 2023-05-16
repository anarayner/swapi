import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {environment} from "../../../environment";
import {People} from "./store/people.interface";

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  private apiUrl = `${environment.swapiUrl}/people`
  private cache = new Map<string, any>();

  constructor(private http: HttpClient) {
  }

  getPeoples(page: number = 1): Observable<People[]> {
    return this.http.get<People[]>(`${this.apiUrl}/?page=${page}&limit=10`);
  }

  search(query?: string, page: number = 1): Observable<People[]> {
    if(query && query !== '') {
      return this.http.get<any>(`${this.apiUrl}/?name=${query}`)
    } else {
      return this.http.get<People[]>(`${this.apiUrl}/?page=${page}&limit=10`);
    }
  }
}
