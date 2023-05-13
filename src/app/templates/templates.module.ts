import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {SharedModule} from "../shared/shared.module";
import {CardTemplateComponent} from './card-template/card-template.component';
import { CardListTemplateComponent } from './card-list-template/card-list-template.component';
import { DialogContentComponent } from './dialog-content/dialog-content.component';
import {RouterLink} from "@angular/router";



@NgModule({
  declarations: [
    CardTemplateComponent,
    CardListTemplateComponent,
    DialogContentComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    SharedModule,
    RouterLink
  ], exports: [
    CardTemplateComponent,
    CardListTemplateComponent
  ]
})
export class TemplatesModule { }
