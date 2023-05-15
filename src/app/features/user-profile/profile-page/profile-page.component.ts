import {Component, OnInit} from '@angular/core';
import {ProfilePageService} from "../profile-page.service";
import {Profile} from "../profile.model";

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit{
  userData: Profile = {} as Profile
  token = localStorage.getItem('token')
  userId = localStorage.getItem('id')?.slice(1, -1) || ''
  isLoading: boolean = true;

  constructor(private profileService: ProfilePageService) { }

  ngOnInit(): void {
    this.getAllFilms()
  }

  getAllFilms() {
    const token = this.token
    if(token){
      this.profileService.getUserProfile(this.userId).subscribe((result) => {
        this.userData = result;
        this.isLoading = false
      });
    }
  }
}
