import { Component, Input } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-icon-button',
  template: `
    <h2 *ngIf="items && items.length > 0">{{ title }}</h2>
    <div class="icon-list">
      <div *ngFor="let item of items" class="icon">
        <mat-icon *ngIf="icon" (click)="onClick(item)" appHoverScale="20">{{ icon }}</mat-icon>
      </div>
    </div>
  `,
  styles: [`
    .icon-list {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      max-width: 600px;
    }

    .icon{
      width: 65px;
      height: 65px;
    }

    mat-icon {
      width: 60px;
      height: 60px;
      font-size: 60px;
      margin-right: 10px;
      cursor: pointer;
    }

    h2 {
      margin-top: 30px;
    }
  `]
})
export class IconButtonComponent {
  @Input() title!: string;
  @Input() icon: string | undefined;
  @Input() items: string[] | undefined;

  constructor(private router: Router) {}

  onClick(url: string) {
    const path = url.split('/api/')[1].split('/')
    const category = path[0], id = path[1]
    this.router.navigate(['/info', category, id]);
  }
}
