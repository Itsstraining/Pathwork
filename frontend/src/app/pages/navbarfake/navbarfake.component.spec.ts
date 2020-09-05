import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarfakeComponent } from './navbarfake.component';

describe('NavbarfakeComponent', () => {
  let component: NavbarfakeComponent;
  let fixture: ComponentFixture<NavbarfakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarfakeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarfakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
