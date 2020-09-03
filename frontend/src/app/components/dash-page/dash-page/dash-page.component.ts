import { Component, OnInit } from '@angular/core';
import { Dashbox } from '../../../models/dask-item.model'
import {DashBoardService} from '../../../service/dash-board.service'
@Component({
  selector: 'app-dash-page',
  templateUrl: './dash-page.component.html',
  styleUrls: ['./dash-page.component.scss']
})
export class DashPageComponent implements OnInit {
  dboxName = '';
  toggleIpt = true;
  public dashDB :Array<Dashbox> =[]
  constructor(public dboardService : DashBoardService) {
    this.dashDB = this.dboardService.db;
   }


  ngOnInit(): void {
  }
  newBox(){
    if (this.dboxName.trim()=='')
      alert("Please enter your job")
    else{
      this.toggle();
      this.dboardService.db.push({
      boxName:this.dboxName,
      content:[],
    });
  }
    this.dboxName='';
  }

  toggle(){
    this.toggleIpt= !this.toggleIpt
  }

}
