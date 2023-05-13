import { Component } from '@angular/core';
import {SwapiService} from "../../services/swapi.service";

@Component({
  selector: 'app-people-page',
  template: `
    <div class="page-container">
      <mat-spinner *ngIf="isLoading" class="page-spinner"></mat-spinner>
      <app-card-list-template *ngIf="!isLoading" [cards]="people"></app-card-list-template>
    </div>
  `,
  styleUrls: ['../page.scss']
})
export class PeoplePageComponent {
  people = []
  isLoading: boolean = true;

  constructor(private swapiService: SwapiService) { }

  ngOnInit(): void {
    this.getAllFilms()
  }

  getAllFilms() {
    this.swapiService.getAll('people').subscribe((result) => {
      this.people = result;
      this.isLoading = false
    });
  }
}
