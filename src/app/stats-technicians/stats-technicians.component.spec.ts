import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsTechniciansComponent } from './stats-technicians.component';

describe('StatsTechniciansComponent', () => {
  let component: StatsTechniciansComponent;
  let fixture: ComponentFixture<StatsTechniciansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatsTechniciansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsTechniciansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
