import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { MatDialog } from '@angular/material/dialog'
import { AuthService } from '../../../../service/auth.service'
import { MatSnackBar } from '@angular/material/snack-bar';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  public nameGroup = new FormGroup({
    userControl: new FormControl('', Validators.required),
    emailControl: new FormControl('', Validators.email),
    passwordControl: new FormControl('', Validators.required),
  })
  constructor(
    public dialog: MatDialog,
    public authService: AuthService,
    public snackBar: MatSnackBar,
    public router: Router,
    public afAuth: AngularFireAuth,
    public http: HttpClient
  ) {

  }


  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.nameGroup.value);
  }
  hide = true;
  emailControl = new FormControl('', [Validators.required, Validators.email]);
  passwordControl = new FormControl('', [Validators.required, Validators.minLength(8)]);

  getErrorMessage() {
    if (this.emailControl.hasError('required')) {
      return 'You must enter a value';
    }

    return this.emailControl.hasError('email') ? 'Not a valid email' : '';
  }
  openDialog() {
    const dialogRef = this.dialog.open(SigninComponent, {});
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  public async googleSignin() {

    // đăng nhập vào với google
    // dùng uid của google trả về
    // gọi api với uid để cập nhật thông tin của người dùng
    const provider = new auth.GoogleAuthProvider();
    const credential = await this.afAuth.signInWithPopup(provider)
      .then(async () => {
        let user = (await this.afAuth.currentUser).toJSON();
        console.log(user);
        this.snackBar.open('Success!', 'OK', { duration: 2000 });
        this.router.navigate(['home']);
        this.http.put(environment.endpoint + "/v1/user", {
          name: user['displayName'],
          email: user['email'],
          uid: user['uid'],
          photourl: user['photoURL']
        }).toPromise();


      })
      .catch((err) => {
        this.snackBar.open(err, 'OK', { duration: 2000 });
      })
  }
  public signout() {
    this.afAuth.signOut();
    this.router.navigate(['/signin']);
  }
  signin() {
    console.log(this.emailControl);
    console.log(this.passwordControl);
    this.afAuth.signInWithEmailAndPassword(this.emailControl.value, this.passwordControl.value).then( () => {
      this.snackBar.open('Success!', 'OK', { duration: 2000 });
      this.router.navigate(['home']);
    }).catch((err)=>{
      this.snackBar.open("You Wrong", 'OK', {duration: 2000});
    });
  }

  signup(email, password) {
    this.afAuth.createUserWithEmailAndPassword(this.emailControl.value, this.passwordControl.value).then(() => {
      this.snackBar.open('Success!', 'ok Nhoc', { duration: 2000 });
      this.router.navigate(['signin']);
    }).catch((err) => {
      this.snackBar.open(err, 'ok', { duration: 2000 });
    });

  }
}
