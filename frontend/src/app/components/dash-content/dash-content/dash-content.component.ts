import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dash-content',
  templateUrl: './dash-content.component.html',
  styleUrls: ['./dash-content.component.scss']
})
export class DashContentComponent implements OnInit {
 @Input() content : string;
  constructor() { }
  toggleDisplay =true;
  toggleInput = false;
  toggleCheckBox= false;
  classA="add-box box1";
  ngOnInit(): void {
  }
  checkBtn=true;
  isChecked(){
    if(this.checkBtn)
    this.classA="add-box box1 done";
    else
    this.classA ="add-box box1";
    this.checkBtn=! this.checkBtn
  }

  toggle(){
    this.toggleDisplay = !this.toggleDisplay;
  }
  tam:string
  okClick(){
    this.content=this.tam;
  }

  delClick(){
    if(confirm("Do you want to delete this task"))
    this.content=null;
    else
    this.content=this.content;
  }

}
