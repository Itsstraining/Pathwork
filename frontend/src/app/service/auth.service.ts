import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import * as firebase from 'firebase'
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User} from '../models/user.model';
import * as fire from 'firebase'
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authState:any = null;
  public user:firebase.User= null;
  user$: Observable<User>;
  constructor(
    private afAuth:AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {
    this.afAuth.authState.subscribe(data => this.authState = data);
   }
   public checkCurrentUser(){
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {

        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {

          return of(null);
        }
      })
    )
  }

   updateUserData({uid, email, photoURL}:User) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${uid}`);
    const data = {
      uid,
      email,
      photoURL
    }

    return userRef.set(data, { merge: true })

  }
}
