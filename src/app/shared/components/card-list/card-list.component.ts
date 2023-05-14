import {Component, Input} from '@angular/core';
import {AuthService} from "../../../auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent {
  currentRoute: string | undefined;
  constructor(private authService: AuthService, private router: Router) {
    this.currentRoute = this.router.url.slice(1);
    console.log(this.currentRoute)
  }

  @Input() cards!: any
}
