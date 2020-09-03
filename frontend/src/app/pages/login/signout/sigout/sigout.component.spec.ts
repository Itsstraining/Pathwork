import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SigoutComponent } from './sigout.component';

describe('SigoutComponent', () => {
  let component: SigoutComponent;
  let fixture: ComponentFixture<SigoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
