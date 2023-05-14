import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environment";

@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  private apiUrl = `${environment.swapiUrl}`

  constructor(private http: HttpClient) { }

  getDetails(category: string, id: string): Observable<any>{
    return this.http.get(`${this.apiUrl}/${category}/${id}`)
  }
}
