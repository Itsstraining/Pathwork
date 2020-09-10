import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, Form } from '@angular/forms';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatDialogRef } from '@angular/material/dialog';
import { DialogAddBoardComponent } from '../dialog-add-board/dialog-add-board.component';

@Component({
  templateUrl: './dialog-edit-board.component.html',
  styleUrls: ['./dialog-edit-board.component.scss']
})
export class DialogEditBoardComponent implements OnInit {
  titleControl: FormControl = new FormControl("");
  emailSharedControl: FormControl = new FormControl("");
  arraySharedEmail: Array<string>;

  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  constructor(private dialogref: MatDialogRef<DialogAddBoardComponent>) { }
  @ViewChild('emailInput') emailInput: ElementRef<HTMLInputElement>;
  ngOnInit(): void {

  }


  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      // if(this.boardService.validateEmail(value.trim()))
      // {
      //   this.arraySharedEmail.push(value.trim());
      // }
      // else
      // {
      //   this.boardService.openSnackBar("Email Invalid", "OK");
      // }
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


  cancelClick(){
    this.dialogref.close();
  }

  saveClick(){
    this.dialogref.close();
  }
}
