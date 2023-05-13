import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthFormComponent} from "./components/auth-form/auth-form.component";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { LoginPageComponent } from './components/login-page.component';
import { SinginPageComponent } from './components/singin-page.component';
import {RouterLink} from "@angular/router";
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {SharedModule} from "../shared/shared.module";
@NgModule({
  declarations: [
    AuthFormComponent,
    LoginPageComponent,
    SinginPageComponent,
  ],
    imports: [
        CommonModule,
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterLink,
        MatSnackBarModule,
        SharedModule
    ],
  exports: [
    LoginPageComponent,
    SinginPageComponent,
  ],
})
export class AuthModule { }
