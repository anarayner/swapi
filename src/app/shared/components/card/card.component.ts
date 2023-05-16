import {Component, Input, TemplateRef, ViewChild} from '@angular/core';
import {AuthService} from "../../../auth/auth.service";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {DialogContentComponent} from "../dialog-content/dialog-content.component";
import {MatSnackBar} from "@angular/material/snack-bar";

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
    private snackBar: MatSnackBar,
    public dialog: MatDialog) {
  }

  ngOnInit(): void {
    // console.log('DATA CARD', this.data)
    const path = this.data.url.split('/api/')[1].split('/')
    this.category = path[0]
    this.id = path[1]
  }

  addToFavorite(){
    const title = this.data.title || this.data.name
    const id_ls = localStorage.getItem('id') as string
    const id = id_ls.slice(1, -1)
    this.authService.addFavorite(id, title, this.data.url).subscribe({
      next: (data: any)=>{
        console.log('FAVOR', data)
        this.snackBar.open('Added to favorites', 'Close', { duration: 5000 });
      },
      error: (error) => {
        console.log("ERROR", error)
        this.snackBar.open(error.error.message, 'Close', { duration: 5000 });
      }
    })
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
