import {Component,  Input, OnInit,  TemplateRef,  ViewChild} from '@angular/core';
import {AuthService} from "../../auth/auth.service";
import { MatDialog } from "@angular/material/dialog";
import {DialogContentComponent} from "../dialog-content/dialog-content.component";
import {DataService} from "../../services/data.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-card-template',
  templateUrl: './card-template.component.html',
  styleUrls: ['./card-template.component.scss']
})
export class CardTemplateComponent implements OnInit{

  @Input() data: any | undefined;
  @Input() index: number | undefined;

  route: any | undefined;


  isLoggedIn$ = this.authService.isLoggedIn$;

  @ViewChild('cardTemplate')
  cardTemplate: TemplateRef<any> | undefined;

  constructor(
    private authService: AuthService,
    private dataService: DataService,
    private router: Router,
    public dialog: MatDialog) {
    this.route = this.router.url.slice(1);
    // console.log("!!!!!!!!!!!!!!",this.route)
    // console.log("INDEX",this.index)

  }

  ngOnInit(): void {
    //console.log('DATA CARD', this.data)
  }

  onDetailsClick(){
    const dialogRef = this.dialog.open(DialogContentComponent, {
      width: '500px',
      height: '500px',
      data: this.data
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
    });
  }

  onFullInfo(){
    const path = this.getPathFromUrl(this.data.url)
    // @ts-ignore
    const route = path ? path : `/${this.route}/${this.index + 1}`
    this.router.navigate([route]);
  }

  private getPathFromUrl(url: string){
    const path = url.split('/api/')[1].slice(0, -1)
    return path ? `${path}` : ''
  }
}

