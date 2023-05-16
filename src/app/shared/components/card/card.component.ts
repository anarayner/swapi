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

  id: string | undefined
  category: string | undefined

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
    const path = this.data.url.split('/api/')[1].split('/')
    this.category = path[0]
    this.id = path[1]
  }

  getInfo(){
    this.router.navigate(['/info', this.category, this.id]);
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
