import { DialogContentComponent } from './../dialog-content/dialog-content.component';
import {Component,OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Content } from '@angular/compiler/src/render3/r3_ast';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styles:['.mat-dialog-container{border-radius:70px}'],
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  openDialog() {
    const dialogRef = this.dialog.open(DialogContentComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  ngOnInit(): void {
  }

}



export class DialogContentExampleDialog {}
