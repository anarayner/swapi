import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AuthService} from "../../auth/auth.service";
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-card-list-template',
  templateUrl: './card-list-template.component.html',
  styleUrls: ['./card-list-template.component.scss']
})
export class CardListTemplateComponent{
  currentRoute: string | undefined;
  constructor(private authService: AuthService, private router: Router) {
    this.currentRoute = this.router.url.slice(1);
    console.log(this.currentRoute)
  }

  @Input() cards: any[] | undefined

}

