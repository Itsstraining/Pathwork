import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { Component, OnInit } from '@angular/core';
import { ListComponent } from '../list/list.component';

import * as firebase from 'firebase';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { DashBoardService } from 'src/app/service/dash-board.service';
const fieldValue = firebase.firestore.FieldValue
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  lists = [];

  constructor(public afs:AngularFirestore, public dashboardService: DashBoardService) {
   }

  ngOnInit(): void {
    this.afs.collection("board").doc("list").snapshotChanges().subscribe((card)=>{
      this.lists = card.payload.get("tabs")
    })
  }
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.lists, event.previousIndex, event.currentIndex);
    this.dashboardService.updateAllList("list", this.lists);
  }
  async addList() {
    let cardRef = await this.afs.collection("cards").add({
    })
    await this.afs.collection("board").doc("list").update({
      "tabs":fieldValue.arrayUnion(cardRef.id)
    })
    // var newList = new ListComponent();
  }
}
