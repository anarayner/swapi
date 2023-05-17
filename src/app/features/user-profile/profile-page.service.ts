import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environment";

@Injectable({
  providedIn: 'root'
})
export class ProfilePageService {

  constructor(private http: HttpClient) { }

  getUserProfile(id: string): Observable<any>{
    return this.http.get<any>(`${environment.apiUrl}/user/${id}`)
  }
}
