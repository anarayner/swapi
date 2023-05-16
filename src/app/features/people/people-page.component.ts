import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {selectPeople, selectPeopleLoaded, selectPeopleLoading} from "./store/people.selectors";
import {loadPeople, searchPeople} from "./store/people.actions";
import {ActivatedRoute, Router} from "@angular/router";
import {PageEvent} from "@angular/material/paginator";
import {debounceTime, Observable, Subject, Subscription} from "rxjs";


@Component({
  selector: 'app-people-page',
  template: `
    <div class="page-container">
      <mat-spinner *ngIf="peopleLoading$ | async" class="page-spinner"></mat-spinner>
      <div class="paginator-container">
        <mat-form-field appearance="fill">
          <mat-label>Search by name</mat-label>
          <input matInput type="search" [(ngModel)]="searchTerm" (input)="searchPeople($event)">
        </mat-form-field>

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


export class PeoplePageComponent implements OnInit, OnDestroy{

  peoples$
  peopleLoading$: Observable<boolean>
  peopleLoaded$: Observable<boolean>
  searchTerm: string = '';

  private pageChangeSubject = new Subject<PageEvent>();
  private pageChangeSubscription: Subscription = new Subscription();
  currentPage: number = 1;

  constructor(private store: Store, private route: ActivatedRoute, private router: Router) {
    this.peoples$ = this.store.select(selectPeople);
    this.peopleLoading$ = this.store.select(selectPeopleLoading);
    this.peopleLoaded$ = this.store.select(selectPeopleLoaded);
    this.currentPage = this.route.snapshot.params['page']
  }

  ngOnDestroy(): void {
        this.pageChangeSubscription.unsubscribe()
    }

  ngOnInit(): void {
    this.store.dispatch(loadPeople({page: this.currentPage}))
    // this.peoples$.subscribe(p => console.log('PEOPLE', p))
    this.pageChangeSubscription = this.pageChangeSubject.pipe(
        debounceTime(500)
    ).subscribe(event => {
      this.currentPage = event.pageIndex + 1;
      this.store.dispatch(loadPeople({page: this.currentPage}));
    });
  }

  onPageChange(event: PageEvent) {
    this.pageChangeSubject.next(event);
  }

  searchPeople(event: any) {
    this.store.dispatch(searchPeople({ query: event.target.value, page: this.currentPage }));
  }
}

