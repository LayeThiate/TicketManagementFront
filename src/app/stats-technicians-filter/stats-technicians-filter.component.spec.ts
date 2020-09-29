import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsTechniciansFilterComponent } from './stats-technicians-filter.component';

describe('StatsTechniciansFilterComponent', () => {
  let component: StatsTechniciansFilterComponent;
  let fixture: ComponentFixture<StatsTechniciansFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatsTechniciansFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsTechniciansFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
