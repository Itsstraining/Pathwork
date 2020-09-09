import { Injectable } from '@angular/core';
import { Dashbox } from '../models/dask-item.model';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class DashBoardService {

async updateTabCard(tabUUID, items) {
  return await this.afs.collection("cards").doc(tabUUID).update({
    "messages": items
  })
}

async updateAllList(listId, items){
  return await this.afs.collection("board").doc(listId).update({
    "tabs": items,
  })
}
  constructor(public afs: AngularFirestore) { }
}
