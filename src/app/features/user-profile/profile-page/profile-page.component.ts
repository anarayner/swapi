import {Component, OnInit} from '@angular/core';
import {ProfilePageService} from "../profile-page.service";
import {Profile} from "../profile.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit{
  userData!: Profile
  token = localStorage.getItem('token')
  userId = localStorage.getItem('id')?.slice(1, -1) || ''
  isLoading: boolean = true;

  id: string | undefined
  category: string | undefined

  constructor(private profileService: ProfilePageService, private router: Router) { }

  ngOnInit(): void {
    this.getUserProfile()
  }

  getDetails(index: number){
    const path = this.userData.favorites[index].apiLink.split('/api/')[1].split('/')
    this.category = path[0]
    this.id = path[1]
    this.router.navigate(['/info', this.category, this.id]);
  }

  getUserProfile() {
    const token = this.token
    if(token){
      this.profileService.getUserProfile(this.userId).subscribe((result) => {
        console.log(result)
        this.userData = result;
        this.isLoading = false
      });
    }
  }
}
