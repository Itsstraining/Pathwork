import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditBoardComponent } from './dialog-edit-board.component';

describe('DialogEditBoardComponent', () => {
  let component: DialogEditBoardComponent;
  let fixture: ComponentFixture<DialogEditBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEditBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogEditBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
