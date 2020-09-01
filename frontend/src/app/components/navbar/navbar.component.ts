import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public auth:AuthService,
    public router:Router) { }


  ngOnInit(): void {
  }
  gotoSth(name: string) {
    this.router.navigate([`${name}`]);
  }

}