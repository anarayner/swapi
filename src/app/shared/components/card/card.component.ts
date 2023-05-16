import {Component, Input, TemplateRef, ViewChild} from '@angular/core';
import {AuthService} from "../../../auth/auth.service";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {DialogContentComponent} from "../dialog-content/dialog-content.component";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() data!: any;
  @Input() index!: number;

  isLoggedIn$ = this.authService.isLoggedIn$;

  @ViewChild('cardTemplate')
  cardTemplate!: TemplateRef<any>;

  constructor(
    private authService: AuthService,
    private router: Router,
    public dialog: MatDialog) {
  }

  ngOnInit(): void {
    //console.log('DATA CARD', this.data)
  }

  getInfo(){
    let path
    if(this.data.properties){
      path = this.data.properties.url.split('/api/')[1].split('/')
    } else {
      path = this.data.url.split('/api/')[1].split('/')
    }
    console.log(path)
    const category = path[0], id = path[1]
    this.router.navigate(['/info', category, id]);

  }

  onDetailsClick(){
    const dialogRef = this.dialog.open(DialogContentComponent, {
      width: '500px',
      height: '500px',
      data: this.data
    });

    dialogRef.afterClosed().subscribe(() => {
      // console.log('The dialog was closed');
    });
  }
}
