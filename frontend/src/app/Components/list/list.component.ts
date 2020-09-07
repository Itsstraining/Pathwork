import { Component, OnInit, Input } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDragExit } from '@angular/cdk/drag-drop';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';
const fieldValue = firebase.firestore.FieldValue
import {DashBoardService} from "../../service/dash-board.service"
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() tabUUID:string;
  items: string[] = [];

  constructor(public afs:AngularFirestore, public dashboardservice: DashBoardService) { }

  ngOnInit(): void {
    console.log(this.tabUUID)
    this.afs.collection("cards").doc(this.tabUUID) .snapshotChanges().subscribe((card)=>{
      this.items = card.payload.get("messages") // Correct array Index
      // console.log(this.items)
    })
  }



  moveCard(event:CdkDragExit<string[]>){
    // event.item.exited.subscribe((data)=>{
    //   console.log(data)
    // })
    // console.log(event.container.data)
    // console.log(this.tabUUID)
  }

  async drop(event: CdkDragDrop<string[]>) {

    if (event.previousContainer === event.container) {
      console.log("DROP")
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex);
      await this.dashboardservice.updateTabCard(event.container.id, event.container.data);
    } else {
      console.log("MOVE")
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
        await this.dashboardservice.updateTabCard(event.previousContainer.id, event.previousContainer.data);
        await this.dashboardservice.updateTabCard(event.container.id, event.container.data);
        //console.log(this.tabUUID)
        console.log(event.previousContainer.id)
        // uuid card
        // data []
        console.log(event.container.data)
        console.log(this.items)

        // console.log(event.container.id)

    }

  }



  onSubmit(newItemForm: NgForm) {
    // this.items.push(newItemForm.value.newItem);

    this.afs.collection("cards").doc(this.tabUUID).update({
      "messages":fieldValue.arrayUnion(newItemForm.value.newItem)
    })
    newItemForm.reset();

  }


}
