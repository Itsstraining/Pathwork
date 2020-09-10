import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase'
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from '../models/user.model';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public authState: firebase.User = null;
  public user: firebase.User = null;
  user$: Observable<User>;
  haveUser = false
  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {
    this.afAuth.authState.subscribe(data => {
      this.authState = data;
      console.log(this.authState.uid);
      this.haveUser = true;
    });
    this.checkCurrentUser();
  }
  public checkCurrentUser() {
    this.user$ = this.afAuth.authState.pipe(
      switchMap((user) => {

        if (user) {

          return 'true';
        } else {

          return of(null);
        }
      })
    )
  }

  updateUserData({ uid, email, photoURL }: User) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${uid}`);
    const data = {
      uid,
      email,
      photoURL
    }

    return userRef.set(data, { merge: true })

  }
}
