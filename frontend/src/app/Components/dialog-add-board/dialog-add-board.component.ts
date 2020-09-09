import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import {MatAutocompleteSelectedEvent, MatAutocomplete} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {BoardService} from "../../service/board.service"
import { AuthService } from 'src/app/service/auth.service';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  templateUrl: './dialog-add-board.component.html',
  styleUrls: ['./dialog-add-board.component.scss']
})
export class DialogAddBoardComponent implements OnInit {

  constructor(public boardService: BoardService, public auth: AuthService) {
   }
  titleControl: FormControl = new FormControl("");
  ngOnInit(): void {
  }

  //button click
  // khoi tao board moi trong database
  // luu ten nguoi dung so huu
  // luu ten nguoi dung share
  addClick(){
    this.boardService.addBoard(this.titleControl.value).then(docref =>{
      
      let boardId = docref.id;
      this.boardService.addBoardOwner(boardId, this.auth.authState.uid);
      this.boardService.addSharedUser(this.emailSharedControl.value);
    })
  }

  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  emailSharedControl = new FormControl();
  arraySharedEmail: string[] = [];

  @ViewChild('emailInput') emailInput: ElementRef<HTMLInputElement>;

 

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      if(this.boardService.validateEmail(value.trim()))
      {
        this.arraySharedEmail.push(value.trim());
      }
      else
      {
        this.boardService.openSnackBar("Email Invalid", "OK");
      }
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.emailSharedControl.setValue(null);
  }

  remove(fruit: string): void {
    const index = this.arraySharedEmail.indexOf(fruit);

    if (index >= 0) {
      this.arraySharedEmail.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.arraySharedEmail.push(event.option.viewValue);
    this.emailInput.nativeElement.value = '';
    this.emailSharedControl.setValue(null);
  }
}
