import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable, of, tap} from "rxjs";
import {environment} from "../../environment";

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  private cache = new Map<string, any>();
  constructor(private http: HttpClient) { }

  getAll(category: string): Observable<any> {
    const url = `${environment.swapiUrl}/${category}`;
    if (this.cache.has(url)) {
      return of(this.cache.get(url));
    }
    return this.http.get(url).pipe(
      map((res: any) => res.results),
      tap((data) => {
        console.log(data);
        this.cache.set(url, data);
      })
    );
  }
}
