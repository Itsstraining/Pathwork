import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import {DialogAddBoardComponent} from '../../Components/dialog-add-board/dialog-add-board.component';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  gotoSth(name: string) {
    this.router.navigate([`${name}`]);
  }

  openDialogAddBoard(){
    const dialogref = this.dialog.open(DialogAddBoardComponent, {
      height: '400px',
      width: '500px',
    } )
  }


}
