import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';
const fieldValue = firebase.firestore.FieldValue

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  constructor(private auth: AuthService, private _snackBar: MatSnackBar,public afs: AngularFirestore, private afAuth: AngularFireAuth,private http:HttpClient) { }
 
  async addBoard(title: string) {
    return await this.afs.collection("board").add({
      "title": title,
      "tabs": []
    })
  }

  checkUID()
  {
    console.log(this.auth.authState.uid);
  }
  async addSharedUser(bid: string, stringEmail: Array<string>) {
    //call api with body -> bid and arrayEmail
     return await this.http.put(environment.endpoint+"/v1/board/shared", {
      "bid": bid,
      "arrayEmail": stringEmail
    }).toPromise().then(value =>{
      //console.log(value);
      this.openSnackBar("OK", "")
    });
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
