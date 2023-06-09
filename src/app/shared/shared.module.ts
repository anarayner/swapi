import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {MatIconModule} from '@angular/material/icon';
import { CardListComponent } from './components/card-list/card-list.component';
import { CardComponent } from './components/card/card.component';
import {MatCardModule} from "@angular/material/card";
import {DialogContentComponent} from "./components/dialog-content/dialog-content.component";
import {FocusDirective} from "./directives/focus.directive";
import {HoverScaleDirective} from "./directives/hover-scale.directive";
import {ItalicPipe} from "./pipes/italic.pipe";
import { IconButtonComponent } from './components/icon-button/icon-button.component';
import { InfoComponent } from './components/info/info.component';
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {AuthorizationModule} from "../auth/authorization.module";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {AuthFormComponent} from "./components/auth-form/auth-form.component";

@NgModule({
  declarations: [
    // NavBarComponent,
    CardListComponent,
    CardComponent,
    DialogContentComponent,
    HoverScaleDirective,
    FocusDirective,
    ItalicPipe,
    IconButtonComponent,
    InfoComponent,
    AuthFormComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    RouterLink,
    RouterLinkActive,
    MatCardModule,
    MatDialogModule,
    AuthorizationModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatSnackBarModule,
  ],
  exports: [
    CardListComponent,
    // CardComponent,
    ItalicPipe,
    HoverScaleDirective,
    IconButtonComponent,
    InfoComponent,
    FocusDirective,
    AuthFormComponent
  ],
  providers: [
    MatDialog,
  ]
})
export class SharedModule { }
