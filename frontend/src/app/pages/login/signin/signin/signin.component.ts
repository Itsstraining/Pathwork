import { Component, OnInit } from '@angular/core';
import{FormControl,FormGroup, Validators} from '@angular/forms'
import {MatDialog} from '@angular/material/dialog'
import {AuthService} from '../../../../service/auth.service'
import {MatSnackBar} from '@angular/material/snack-bar';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';



@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  public nameGroup= new FormGroup({
    userControl: new FormControl('',Validators.required),
    emailControl : new FormControl('',Validators.email),
    passwordControl : new FormControl('',Validators.required),
  })
  constructor(
    public dialog:MatDialog,
      public authService:AuthService,
      public snackBar : MatSnackBar,
      public router :Router,
      public afAuth : AngularFireAuth,
  ) {

  }


  ngOnInit(): void {
  }
  onSubmit (){
    console.log(this.nameGroup.value);
  }
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(8)]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  openDialog() {
    const dialogRef = this.dialog.open(SigninComponent,{});
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  public async googleSignin() {
    const provider = new auth.GoogleAuthProvider();
    const credential = await this.afAuth.signInWithPopup(provider)


    .then(()=>{
      this.snackBar.open('Success!','OK',{duration:2000});
      this.router.navigate(['./home']);
    })
    .catch((err)=>{
      this.snackBar.open(err,'OK',{duration:2000});
    })
  }
  public signout(){
    this.afAuth.signOut();
    this.router.navigate(['/signin']);
  }
  signin() {
    this.afAuth.signInWithEmailAndPassword(this.email.value, this.password.value).then(() => {
      this.snackBar.open('Success!', 'OK', {duration: 2000});
      this.router.navigate(['./home']);
    }).catch((err) => {
      this.snackBar.open(err, 'OK', {duration: 2000});
    });

  }

  signup(email, password) {
    this.afAuth.createUserWithEmailAndPassword(this.email.value,this.password.value).then(()=>{
    this.snackBar.open('Success!', 'ok Nhoc', {duration: 2000});
    this.router.navigate(['signin']);
}).catch((err) =>{
  this.snackBar.open(err,'ok', {duration: 2000});
});
  
  }
}
