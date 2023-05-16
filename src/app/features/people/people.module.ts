import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PeoplePageComponent} from "./people-page.component";
import {MatInputModule} from "@angular/material/input";
import {SharedModule} from "../../shared/shared.module";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    PeoplePageComponent,
  ],
  imports: [
    CommonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    SharedModule,
    RouterModule.forChild([{ path: '', component: PeoplePageComponent }])
  ]
})
export class PeopleModule { }
