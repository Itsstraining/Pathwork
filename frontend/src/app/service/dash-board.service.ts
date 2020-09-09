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
  constructor(public afs: AngularFirestore) { }
}
