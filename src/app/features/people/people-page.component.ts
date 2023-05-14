import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {selectPeople, selectPeopleLoaded, selectPeopleLoading} from "./store/people.selectors";
import {loadPeople} from "./store/people.actions";
import {ActivatedRoute, Router} from "@angular/router";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-people-page',
  template: `
    <div class="page-container">
      <mat-spinner *ngIf="peopleLoading$ | async" class="page-spinner"></mat-spinner>
      <div class="paginator-container">
        <mat-paginator [length]="83"
                       [pageSize]="10"
                       [hidePageSize]="true"
                       aria-label="Select page"
                       class="paginator"
                       (page)="onPageChange($event)"
        >
        </mat-paginator>
      </div>
      <app-card-list *ngIf="peopleLoaded$ | async" [cards]="peoples$ | async" class="list"></app-card-list>
    </div>
  `,
  styleUrls: ['../page.scss']
})



export class PeoplePageComponent implements OnInit{
  peoples$ = this.store.select(selectPeople);
  peopleLoading$ = this.store.select(selectPeopleLoading);
  peopleLoaded$ = this.store.select(selectPeopleLoaded);

  currentPage: number = 1;

  constructor(private store: Store, private route: ActivatedRoute, private router: Router) {
     this.currentPage = this.route.snapshot.params['page']
    console.log('currentPage', this.currentPage)
  }

  ngOnInit(): void {
    this.store.dispatch(loadPeople({page: this.currentPage}))
    this.peoples$.subscribe(d => console.log('PEOPLE', d))
  }

  onPageChange(event: PageEvent){
    this.currentPage = event.pageIndex + 1
    this.store.dispatch(loadPeople({page: this.currentPage}))
  }

}
