import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../auth/auth.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit{

  isLoggedIn$ = this.authService.isLoggedIn$;
  token = localStorage.getItem('token')
  userId = localStorage.getItem('id')?.slice(1, -1)

  constructor(private authService: AuthService) {}
  ngOnInit(): void {
  }

  onSignOut(){
    this.authService.signOut()
  }
}
