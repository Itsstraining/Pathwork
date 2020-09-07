import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public name='';
  public email= '';
  public photoULR= '';
  foods: Food[] = [
    {value: 'Logout', viewValue: 'Logout'},

  ];
  constructor(public auth: AuthService,public afAuth:AngularFireAuth,private router: Router) { }

  ngOnInit(): void {
    this.afAuth.user.subscribe((user)=>{
      if(user){
        this.name=user.displayName;
        this.email=user.email;
        this.photoULR=user.photoURL;


      }
    })
  }
  gotoSth(name: string) {
    this.router.navigate([`${name}`]);
  }

}
