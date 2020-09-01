import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashBoxComponent } from './dash-box.component';

describe('DashBoxComponent', () => {
  let component: DashBoxComponent;
  let fixture: ComponentFixture<DashBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
