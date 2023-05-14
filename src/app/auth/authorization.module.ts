import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {JWT_OPTIONS, JwtHelperService} from "@auth0/angular-jwt";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {TokenInterceptor} from "./token.interceptor";
import {AuthService} from "./auth.service";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,

  ],
  providers: [
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    AuthService
  ]
})
export class AuthorizationModule { }
