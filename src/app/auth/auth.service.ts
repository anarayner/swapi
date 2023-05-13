import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, BehaviorSubject, tap, combineLatest, map, startWith, take} from "rxjs";
import {LoggedInUser} from "./auth.model";
import {environment} from "../../environment";
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl;

  private userSubject = new BehaviorSubject<any>({token: localStorage.getItem('token') || ''})
  public user$ = this.userSubject.asObservable()

  public isLoggedIn$ = combineLatest([
    this.user$,
    this.isLoggedInFromStorage$.pipe( startWith(this.isLoggedIn))
  ]).pipe(
  map(([user, isLoggedIn]) => {
      const token = user.token || ''
      const isTokenExpired = this.jwtHelper.isTokenExpired(token)
      return isLoggedIn && !isTokenExpired
    }),
  )

  constructor(private http: HttpClient, public jwtHelper: JwtHelperService) { }

  public logIn(username: string, password: string): Observable<any>{
    return this.http.post<LoggedInUser>(`${this.apiUrl}/login`, {username, password}).pipe(
      take(1),
      tap(user => {
        localStorage.setItem('token', JSON.stringify(user.token))
        localStorage.setItem('id', JSON.stringify(user.id))
        this.userSubject.next(user)
        // console.log("USER$", this.user$)
        // console.log("isLoggedInFromStorage$", this.isLoggedInFromStorage$)
        // console.log("isLoggedIn$", this.isLoggedIn$)
      })
    )
  }

  public registration(username: string, password: string){
    return this.http.post(`${this.apiUrl}/registration`, {username, password})
  }

  public signOut(): void {
    this.userSubject.next({ token: '' });
    localStorage.removeItem('token');
    localStorage.removeItem('id');
  }

  private get isLoggedIn(): boolean{
    const token = localStorage.getItem('token')
    return !!token && !this.jwtHelper.isTokenExpired(token)
  }

  private get isLoggedInFromStorage$(): Observable<boolean>{
    return this.user$.pipe(
      take(1),
      map(() => this.isLoggedIn)
    )
  }

}
