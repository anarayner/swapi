import {Component, OnInit} from '@angular/core';
import { Location } from '@angular/common';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Observable} from "rxjs";
import {loadDetails} from "../store/details.actions";
import {Store} from "@ngrx/store";
import {selectDetails, selectDetailsLoaded, selectDetailsLoading} from "../store/details.selectors";
import {
  filmInfo,
  filmInfoButtons,
  peopleInfo,
  peopleInfoButtons,
  planetInfo,
  planetInfoButtons, vehicleInfo, vehicleInfoButtons
} from "../store/details.interface";

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})
export class DetailsPageComponent implements OnInit{

  category!: string | null

  details$: Observable<any> = this.store.select(selectDetails)
  detailsLoading$ = this.store.select(selectDetailsLoading)
  detailsLoaded$ = this.store.select(selectDetailsLoaded)

  filmInfo = filmInfo
  filmInfoButtons = filmInfoButtons
  peopleInfo = peopleInfo
  peopleInfoButtons = peopleInfoButtons
  planetInfo = planetInfo
  planetInfoButtons = planetInfoButtons
  vehicleInfo = vehicleInfo
  vehicleInfoButtons = vehicleInfoButtons

  constructor(
    private location: Location,
    private store: Store,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.category = params.get('category');
      const category = this.category
      const id: any = params.get('id');
      console.log('category id ONINIT', this.category, id)
      this.store.dispatch(loadDetails({ category, id }));
    });
  }

  goBack(){
    this.location.back()
  }
}
