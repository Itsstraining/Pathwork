import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardCardHomeComponent } from './board-card-home.component';

describe('BoardCardHomeComponent', () => {
  let component: BoardCardHomeComponent;
  let fixture: ComponentFixture<BoardCardHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardCardHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardCardHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
