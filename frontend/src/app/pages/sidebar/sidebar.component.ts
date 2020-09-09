import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddBoardComponent } from '../../Components/dialog-add-board/dialog-add-board.component';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/service/auth.service';
import { elementAt } from 'rxjs/operators';
import { BoardService } from 'src/app/service/board.service';
import { AngularFireAuth } from '@angular/fire/auth';
interface Board {
  title: string,
  bid: string,
  sharedArray: Array<string>
}
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})

export class SidebarComponent implements OnInit {

  constructor(private afAuth:AngularFireAuth,public board: BoardService ,public auth: AuthService, public afs: AngularFirestore, private router: Router, public dialog: MatDialog) { }
  listOwn = [];
  listShare = [];
  uid:string;
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    
  }

  ngOnInit(): void {
    //console.log(this.auth.haveUser);
    //get array board id in collection user
    //with every board get title
    this.afAuth.user.subscribe(
      user =>{
        this.uid = user.uid;
        this.afs.collection("users").doc(this.uid).get().subscribe(userref => {


          let userrefdata = userref.data();
          let arrayBoardOwn = userrefdata['boardOwner'] as Array<string>;
          let arraBoardShare = userrefdata['boardShared'] as Array<string>;
          let boardref = this.afs.collection("board");
          //parse array board id to data (title, bid, shared)
          arrayBoardOwn.forEach(element => {
            boardref.doc(element).snapshotChanges().subscribe((board =>{
              let boarddata = board.payload.data();
              let boardpush:Board = {
                title : boarddata['title'],
                bid : board.payload.id,
                sharedArray : boarddata['shared']
              } 
              this.listOwn.push(boardpush)
            }))
          });
          // arraBoardShare.forEach(element =>{
          //    boardref.doc(element).snapshotChanges().subscribe((board =>{
          //     let boarddata = board.payload.data();
          //     let boardpush:Board = {
          //       title : boarddata['title'],
          //       bid : board.payload.id,
          //       sharedArray : boarddata['shared']
          //     } 
          //     this.listShare.push(boardpush)
          //   }))
          // })
        })
      }
    )
    

  }
  gotoSth(name: string) {
    this.router.navigate([`${name}`]);
  }

  openDialogAddBoard() {
    const dialogref = this.dialog.open(DialogAddBoardComponent, {
      height: '400px',
      width: '500px',
    })
  }


}
