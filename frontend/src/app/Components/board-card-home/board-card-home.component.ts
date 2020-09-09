import { Component, OnInit, Input } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-board-card-home',
  templateUrl: './board-card-home.component.html',
  styleUrls: ['./board-card-home.component.scss']
})
export class BoardCardHomeComponent implements OnInit {

  @Input() bid;
  constructor(private afs: AngularFirestore) { }
  title: string;
  shared: Array<string>;
  docRef;
  
  ngOnInit(): void {
    console.log(this.bid);
    this.docRef = this.afs.collection("board").doc(this.bid).snapshotChanges().subscribe(value=>{
     let data =  value.payload.data();
     this.title = data['title'];
     this.shared = data['sharedId'];
    })
  }
}
