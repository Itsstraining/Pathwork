import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatSnackBar } from '@angular/material/snack-bar';
const fieldValue = firebase.firestore.FieldValue

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  constructor(private _snackBar: MatSnackBar,public afs: AngularFirestore, private afAuth: AngularFireAuth,) { }


  async addBoard(title: string) {
    return await this.afs.collection("board").add({
      "title": title,
      "tabs": []
    })
  }

  async addSharedUser(stringEmail: string) {
    //parse string to array
    let arrayEmail = stringEmail.split(",");
    console.log(arrayEmail);
  }

  async addBoardOwner(Bid: string, uid: string) {
    //console.log(Bid+ "---" + uid);
    return await this.afs.collection("users").doc(uid).update({
      "boardOwner": fieldValue.arrayUnion(Bid)
    })
  }

  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
