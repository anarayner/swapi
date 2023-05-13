import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-dialog-content',
  templateUrl: './dialog-content.component.html',
})
export class DialogContentComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DialogContentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}


  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    console.log("DIALOG DATA", this.data)
  }
}
