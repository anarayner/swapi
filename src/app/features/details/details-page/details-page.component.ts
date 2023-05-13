import {Component, OnInit} from '@angular/core';
import { Location } from '@angular/common';
import {DetailsService} from "../details.service";
import {environment} from "../../../../environment";
import {Router} from "@angular/router";

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})
export class DetailsPageComponent implements OnInit{

  url
  data: any
  constructor(private router: Router, private location: Location, private detailsService: DetailsService) {
    this.url = this.router.url.slice(1);
    console.log(this.url);
  }

  goBack(){
     this.location.back()
  }

  ngOnInit(): void {
    this.getDetails()
  }

  getDetails() {
    if(this.url !== undefined){
      this.detailsService.getDetails(`${environment.swapiUrl}/${this.url}`).subscribe((result) => {
        this.data = result;
        console.log("!!!!!!!", this.data)
        //this.isLoading = false
      });
    }
  }

}
