import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavBarComponent} from "./components/nav-bar/nav-bar.component";
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

@NgModule({
  declarations: [
    NavBarComponent,
    CardListComponent,
    CardComponent,
    DialogContentComponent,
    HoverScaleDirective,
    FocusDirective,
    ItalicPipe,
    IconButtonComponent,
    InfoComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    RouterLink,
    RouterLinkActive,
    MatCardModule,
    MatDialogModule,
    AuthorizationModule
  ],
  exports: [
    NavBarComponent,
    CardListComponent,
    CardComponent,
    ItalicPipe,
    HoverScaleDirective,
    IconButtonComponent,
    InfoComponent
  ], providers: [
    MatDialog,
  ]
})
export class SharedModule { }
