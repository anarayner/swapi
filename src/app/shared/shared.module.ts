import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavBarComponent} from "./nav-bar/nav-bar.component";
import {MatButtonModule} from "@angular/material/button";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {MatIconModule} from '@angular/material/icon';
import { HoverScaleDirective } from './derectives/hover-scale.directive';
import { FocusDirective } from './derectives/focus.directive';

@NgModule({
  declarations: [
    NavBarComponent,
    HoverScaleDirective,
    FocusDirective,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    RouterLink,
    RouterLinkActive
  ],
  exports: [
    NavBarComponent,
    FocusDirective,
    HoverScaleDirective,
  ]
})
export class SharedModule { }
